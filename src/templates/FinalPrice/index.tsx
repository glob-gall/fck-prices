import {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { OptionProps } from "../../components/Step/Option"
import OptionMiniature from '../../components/OptionMiniature'

import useBudget from "../../hooks/useBudget"
import * as S from './styles'

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
      <Link href="/">
      <S.Link>Voltar</S.Link>
      </Link>
      <S.TotalPrice>
        O preço estimado é de <span>R$ {totalPrice}</span>
      </S.TotalPrice>

      <S.ConfirmButton>Confirmar Orçamento</S.ConfirmButton>

      <S.Options>
        <S.OptionsTitle>Passos escolhidos:</S.OptionsTitle>
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