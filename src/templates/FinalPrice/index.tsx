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

type ActiveOptionProps = OptionProps & {
  step:string
}

function TotalPrice(){
  const router = useRouter()
  const {steps,choosedDomain,years} = useBudget()
  const [totalPrice,setTotalPrice] = useState(0)
  const [activeOptions,setActiveOptions] = useState<ActiveOptionProps[]>([])
  const [budgetConfirmed,setBugetConfirmed] = useState(false)
  
  useEffect(()=>{
    setActiveOptions([])
    let goBack = true
    steps.forEach(step=>{
      if(step.options){
        step.options.forEach(option=>{
          if(option.active){
            let activeOption:ActiveOptionProps 
            activeOption = {
              ...option,
              step:step.question
            }
            setActiveOptions(state=>[...state, activeOption])
            goBack = false
          }
        })
      }
    })
    if(goBack){
      router.push('/')
    }
  },[])
    
  useEffect(()=>{
    let domain:number
    let siteType:number
    let platform:number
    activeOptions.map(opt=>{
      if(opt.step === "Você já tem um domínio cadastrado?"){
        domain = opt.price
      }
      if(opt.step === "Tipo de site"){
        siteType = opt.price
      }
      if(opt.step === "Plataforma"){
        platform = opt.price
      }
    })
    
    const calculatedPrice = domain + (years * platform) + siteType
    setTotalPrice(calculatedPrice)
  },[activeOptions,setTotalPrice,years])

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
            <S.ButtonsTitle>Entre em contato</S.ButtonsTitle>
            <S.ComfirmButtonWrapper>
              <a href={`https://api.whatsapp.com/send?phone=${linkWhatsapp}&text=Olá, gostaria de fazer um orçamento para um site, 
              que tenho a intenção de manter por ${years} anos.
              Minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()} e o domínio que escolhi é ${choosedDomain}`}>
                <S.WhatsappButton>
                  <img src={whatsapp} alt="icone do WhatsApp"/>
                  WhatsApp
                </S.WhatsappButton>
              </a>
              <a href={`mailto:${linkEmail}?subject=Orçamento Fck Timing&body=Olá, gostaria de fazer um orçamento para um site, 
              que tenho a intenção de manter por ${years} anos.
              Minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()} e o domínio que escolhi é ${choosedDomain}`}>
                <S.EmailButton>
                  <img src={email} alt="uma carta com um arroba no meio"/>
                  Email
                </S.EmailButton>
              </a>
            </S.ComfirmButtonWrapper>
        </>
      }
      </S.ButtonWrapper>
      <S.Options>
        <S.OptionsTitle>Escolhas:</S.OptionsTitle>
        <S.DomainAndYears>
          {choosedDomain ? (
            <p>{choosedDomain}</p>
          ) :(
            <p>Já tenho um domínio</p>
          )}
        </S.DomainAndYears>
        <S.DomainAndYears>
          <p>{years} Ano{years>1 && 's'}</p>
        </S.DomainAndYears>
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