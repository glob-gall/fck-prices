import useBudget from '../../../hooks/useBudget'
import * as S from './styles'

export type OptionProps = {
  img: string
  img_alt?:string
  text: string
  description:string
  opt?:string
  active?:boolean
  price:number
}

function Option({img,img_alt,text,opt,active,description}:OptionProps){
  const {nextStep} = useBudget()

  return(
    <S.Wrapper active={active} onClick={()=>nextStep(opt)}>
      <img src={img} alt={img_alt || ''}/>
      <S.Title>{text}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Option