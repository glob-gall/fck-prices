import * as S from './styles'
import Option,{OptionProps} from './Option'

export type StepProps = {
  question: string
  options: OptionProps[]
  // onSelect: (price:number)=>void
}

function Step({question,options}:StepProps){

  return(
    <S.Wrapper>
      <S.Title>{question}</S.Title>
      <S.OptionsContainer>
        {options.map((option,index)=>(<Option {...option}key={index} />))}
      </S.OptionsContainer>
    </S.Wrapper>
  )
}

export default Step