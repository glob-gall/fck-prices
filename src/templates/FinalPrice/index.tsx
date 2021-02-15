import {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { OptionProps } from "../../components/Step/Option"
import OptionMiniature from '../../components/OptionMiniature'
import Logo from '../../public/static/svgs/logo-light.svg'

import useBudget from "../../hooks/useBudget"
import * as S from './styles'
import { ArrowLeft } from '@styled-icons/feather'

function TotalPrice(){
  const router = useRouter()
  const {totalPrice,steps} = useBudget()
  const [activeOptions,setActiveOptions] = useState<OptionProps[]>([])
  
  useEffect(()=>{
    if(totalPrice===0){
      router.push('/')
      return
    }
    setActiveOptions([])

    steps.forEach(step=>{
      step.options.forEach(option=>{
        if(option.active){
          setActiveOptions(state=>[...state,option])
        }
      })
    })
  },[])
    
  return (
    <S.Wrapper>

      <Link href="/" passHref>
      <S.Link>
        <ArrowLeft size={36}/> 
        <span>Voltar</span>
      </S.Link>
      </Link>

      <S.Logo>
        <img src={Logo} alt="fck timing logo"/>
      </S.Logo>
      <S.TotalPrice>
        O preço estimado é de <span>R$ {totalPrice}</span>
      </S.TotalPrice>

      <S.ConfirmButton>Confirmar Orçamento</S.ConfirmButton>

      <S.Options>
        <S.OptionsTitle>Escolhas:</S.OptionsTitle>
        {activeOptions.map((opt,index)=>(
          <OptionMiniature 
            key={index} 
            img={opt.img} 
            img_alt={opt.img_alt} 
            text={opt.text} 
            opt={opt.opt}
          />
          ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default TotalPrice