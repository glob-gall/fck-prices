import {ArrowLeft} from '@styled-icons/feather'
import * as S from './styles'

import Step from '../Step'
import useBudget from '../../hooks/useBudget'

function PriceCalculator() {
  const {prevStep,totalPrice,activeStep,steps} = useBudget()

  return (
    <S.Wrapper>
      <S.Header>

      <div>
      {
        activeStep>0 &&
        <S.PrevButton onClick={()=>prevStep()}><ArrowLeft size={36}/> <p>Anterior</p></S.PrevButton>
      }
      </div>
      <S.StepCounter>
      <span>{`${activeStep+1}/${steps.length}`}</span>
      </S.StepCounter>
      <S.TotalPrice>
      {
        totalPrice>0 &&
        <span>{`R$ ${totalPrice},00`}</span>
      }
      </S.TotalPrice>

      </S.Header>
      {<Step {...steps[activeStep]}/>}
    </S.Wrapper>
  ) 
}

export default PriceCalculator