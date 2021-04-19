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
  const {steps,choosedDomain,years,setActiveStep} = useBudget()
  const [developmentPrice,setDevelopmentPrice] = useState(0)
  const [yearPrice,setYearPrice] = useState(0)
  const [activeOptions,setActiveOptions] = useState<ActiveOptionProps[]>([])
  const [budgetConfirmed,setBugetConfirmed] = useState(false)
  const [radio,setRadio] = useState(true)
  
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
    let sitePrice:number
    let hostPrice:number
    activeOptions.map(opt=>{
      if(opt.step === "Você já tem um domínio cadastrado?"){
        domain = opt.price
      }
      if(opt.step === "Tipo de site"){
        sitePrice = opt.price
        hostPrice = opt.hostPrice
      }
    })
    const calculatedYearPrice = (hostPrice*12)+domain
    setDevelopmentPrice(sitePrice)
    setYearPrice(calculatedYearPrice)
  },[activeOptions,setDevelopmentPrice,setYearPrice])

  return (
    <S.Wrapper>
      <S.Header>
        <Link href="/" passHref>
        <S.Link>
          <ArrowLeft size={36}/> 
          <span>Voltar</span>
        </S.Link>
        </Link>
        <S.HomeButton href="https://fcktiming.studio/">Home</S.HomeButton>
      </S.Header>

      <S.Logo href="https://fcktiming.studio/">
        <img src={Logo} alt="fck timing logo"/>
      </S.Logo>
      <S.TotalPrice>
        O preço estimado é de 
        <div>
          <span>R$ {developmentPrice}</span>

          <S.YearPriceContainer>
            <S.YearPrice onClick={()=>setRadio(true)}>
              <input type="radio" id="year" name="price" value="year" checked={radio} />
              <label >+R$ {yearPrice}/ano</label>
              <div className="radio"/> 
            </S.YearPrice>

            <S.YearPrice onClick={()=>setRadio(false)}>
              <input type="radio" id="month" name="price" value="month" checked={!radio} />
              <label >+R$ {(yearPrice/12).toFixed(2)}/mês</label>
              <div className="radio"/> 
            </S.YearPrice>
          </S.YearPriceContainer>

        </div>
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
              
                <S.WhatsappButton 
                href={`https://api.whatsapp.com/send?phone=${linkWhatsapp}&text=Olá, gostaria de fazer um orçamento para um site,
                que tenho a intenção de manter por ${years} ano${years>1?"s":""} e pagar ${radio?'anualmente':'mensalmente'}.%0a
                Minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()} ${choosedDomain && `e o domínio que escolhi é ${choosedDomain}`}`}
                target="_blank"
                >
                    <img src={whatsapp} 
                    alt="icone do WhatsApp"
                    />
                    WhatsApp
                </S.WhatsappButton>
              
                <S.EmailButton 
                href={`mailto:${linkEmail}?subject=Orçamento Fck Timing&body=Olá, gostaria de fazer um orçamento para um site, 
                que tenho a intenção de manter por ${years} ano${years>1?"s":""} e pagar ${radio?'anualmente':'mensalmente'}.<br/>
                Minhas escolhas são: ${activeOptions.map(opt=> opt.text).join()} ${choosedDomain && `e o domínio que escolhi é ${choosedDomain}`}`}
                target="_blank"
                >
                    <img src={email} alt="uma carta com um arroba no meio"/>
                    Email
                </S.EmailButton>
            </S.ComfirmButtonWrapper>
            
        </>
      }
      </S.ButtonWrapper>
      <S.Options>
        <S.OptionsTitle>Escolhas:</S.OptionsTitle>
          {choosedDomain && (
          <S.DomainAndYears>
              <p>{choosedDomain}</p>
          </S.DomainAndYears>
          )}
        <S.DomainAndYears onClick={()=>{
          setActiveStep(2)
          router.push('/')
        }}>
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