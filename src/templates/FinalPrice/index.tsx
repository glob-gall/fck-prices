import { ArrowLeft } from '@styled-icons/feather'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { OptionProps } from "../../components/Step/Option"
import OptionMiniature from '../../components/OptionMiniature'
import Logo from '../../public/static/svgs/logo-light.svg'

import whatsapp from '../../public/static/svgs/whatsapp.svg'
import email from '../../public/static/svgs/email.svg'

import useBudget from "../../hooks/useBudget"
import * as S from './styles'

const linkEmail = 'contato@fcktiming.studio'
const linkWhatsapp = '+55(61)981460069'

function TotalPrice(){
  const router = useRouter()
  const {totalPrice,steps} = useBudget()
  const [activeOptions,setActiveOptions] = useState<OptionProps[]>([])
  const [budgetConfirmed,setBugetConfirmed] = useState(false)
  
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

      <S.ButtonWrapper>
      {!budgetConfirmed ?
        <S.ConfirmButton onClick={()=>setBugetConfirmed(true)}>
          Confirmar Orçamento
        </S.ConfirmButton>
          :
          <>
          
          <a href={`https://api.whatsapp.com/send?phone=${linkWhatsapp}&text=Olá, gostaria de fazer um orçamento, minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()}`}>
            <S.WhatsappButton>
              <img src={whatsapp} alt="icone do WhatsApp"/>
              Entrar em contato via WhatsApp
            </S.WhatsappButton>
          </a>
          <a href={`mailto:${linkEmail}?subject=Orçamento Fck Timing&body=Olá, gostaria de fazer um orçamento, 
          minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()}`}>
            <S.EmailButton>
              <img src={email} alt="uma carta com um arroba no meio"/>
              Entrar em contato via Email
            </S.EmailButton>
          </a>
        </>
      }
      </S.ButtonWrapper>

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