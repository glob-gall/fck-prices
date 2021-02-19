import { useCallback } from 'react'
import useBudget from '../../../hooks/useBudget'
import * as S from './styles'

export type RangeItem = {
  text:string
  opt?:number
  active?:boolean
  price:number
}

export type RangeSelecetProps={
  items: RangeItem[]
}

function RangeSelect({items}:RangeSelecetProps){
  const {nextStepYear} = useBudget()

  return (
    <S.Wrapper>
      {items.map(item=>(
        <S.Item 
          key={item.opt}
          onClick={()=>nextStepYear(item.opt)}
        >
          <div/>
          <p>{item.text}</p>
        </S.Item>)
      )}
    </S.Wrapper>
  )
}

export default RangeSelect