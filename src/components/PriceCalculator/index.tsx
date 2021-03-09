import {ArrowLeft} from '@styled-icons/feather'
import * as S from './styles'

import Step from '../Step'
import useBudget from '../../hooks/useBudget'

function PriceCalculator() {
  const {prevStep,price,activeStep,steps} = useBudget()

  return (
    <S.Wrapper>
      <S.Header>
      <div>
      {
        activeStep>0 ?
        <S.PrevButton onClick={()=>prevStep()}><ArrowLeft size={36}/> <p>Anterior</p></S.PrevButton>
        :
        <a href="https://fcktiming.studio/">
          <S.PrevButton ><ArrowLeft size={36}/><p>Home</p></S.PrevButton>
        </a>
      }
      </div>
      <S.StepCounter>
      <span>{`${activeStep+1}/${steps.length}`}</span>
      </S.StepCounter>
      <S.TotalPrice>
      {
        price>0 &&
        <span>{`R$ ${price},00`}</span>
      }
      </S.TotalPrice>

      </S.Header>
      {<Step {...steps[activeStep]}/>}
    </S.Wrapper>
  ) 
}

export default PriceCalculator