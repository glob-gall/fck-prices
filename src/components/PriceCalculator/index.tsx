import * as S from './styles'

import Step from '../Step'
import useBudget from '../../hooks/useBudget'


//calcula o total price
//mostra a quantidade de steps
//mostra o step atual
function PriceCalculator() {
  const {prevStep,totalPrice,activeStep,steps} = useBudget()

  return (
    <S.Wrapper>
      <S.Header>

      <div>
      {
        activeStep>0 &&
        <S.PrevButton onClick={()=>prevStep()}>{'<-'} Anterior</S.PrevButton>
      }
      </div>
      <S.StepCounter>{`${activeStep+1}/${steps.length}`}</S.StepCounter>
      <div>
      {
        totalPrice>0 &&
        <S.TotalPrice>{`R$ ${totalPrice},00`}</S.TotalPrice>
      }
      </div>

      </S.Header>
      {<Step {...steps[activeStep]}/>}
    </S.Wrapper>
  ) 
}

export default PriceCalculator