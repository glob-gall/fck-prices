import { useRouter } from 'next/router'
import useBudget from '../../../hooks/useBudget'
import * as S from './styles'

export type OptionProps = {
  img: any
  img_alt?:string
  text: string
  description?:string
  opt?:string
  active?:boolean
  price:number
  hostPrice?:number
  redirect?:string
}

function Option({img,img_alt,text,opt,active,description,redirect}:OptionProps){
  const {nextStep} = useBudget()
  const router = useRouter()

  const onCLickFn = (opt:string)=>{
    if(!!redirect){
      router.push(redirect)
    }
    nextStep(opt)
  }

  return(
    <S.Wrapper active={active} onClick={()=> onCLickFn(opt)}>
      <img src={img} alt={img_alt || ''}/>
      <S.Title>{text}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Option