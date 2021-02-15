import useBudget from '../../hooks/useBudget'
import * as S from './styles'

export type OptionMiniatureProps = {
  img: string
  img_alt?:string
  text: string
  opt: string
}

function OptionMiniature({img,img_alt,text,opt}:OptionMiniatureProps){
  const {goToSpecificStep} = useBudget()

  return(
    <S.Wrapper onClick={()=>goToSpecificStep(opt)}>
      <img src={img} alt={img_alt || ''}/>
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default OptionMiniature