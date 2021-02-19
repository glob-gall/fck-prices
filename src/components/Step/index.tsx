import * as S from './styles'
import Option,{OptionProps} from './Option'
import RangeSelect,{RangeItem} from './RangeSelect'



export type StepProps = {
  question: string
  options?: OptionProps[]
  rangeItems?: RangeItem[]
}

function Step({question,options,rangeItems}:StepProps){

  return(
    <S.Wrapper>
      <S.Title>{question}</S.Title>
      {options && (
      <S.OptionsContainer>
        {options.map((option,index)=>(<Option {...option}key={index} />))}
      </S.OptionsContainer>
      )}
      {rangeItems && (
        <RangeSelect items={rangeItems}/>
      )}
    </S.Wrapper>
  )
}

export default Step