import {useRouter} from 'next/router'

import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from "react";
import { StepProps } from "../components/Step";

type IbudgetProvider ={
  nextStep(opt:string):void
  prevStep():void
  goToSpecificStep(step:string):void
  setChoosedDomain:Dispatch<SetStateAction<string>>
  nextStepYear(opt:number):void
  setActiveStep(step:number):void
  price
  activeStep:number
  steps: StepProps[]
  years:number
  choosedDomain:string
}

const BudgetContext = createContext({} as IbudgetProvider)

function useBudget(){
  const context = useContext(BudgetContext)
  return context
}

type BudgetProviderProps = {
  children:React.ReactNode
  initialSteps: StepProps[]
}
export function BudgetProvider({children,initialSteps}:BudgetProviderProps){
  const router = useRouter()
  const [steps,setSteps] = useState(initialSteps)
  const [activeStep,setActiveStep] = useState(0)
  const [years,setYears] = useState(0)
  const [price,SetPrice] = useState(0)
  const [choosedDomain,setChoosedDomain] = useState('')

  const nextStepYear = useCallback((opt:number)=>{
    setYears(opt)
    if(activeStep+1 === steps.length){
      router.push('/final-price')
      return
    }
    setActiveStep(state => state+1)
  },[setYears,activeStep])

  const nextStep = useCallback(
    (opt:string)=>{
      setSteps(state=>{

        state[activeStep].options = state[activeStep].options.map(option=>{
          if(option.opt === opt && option.active) {
            return option
          }
          if(option.opt !== opt && option.active){
            SetPrice(state=>state - option.price)
            option.active = false
          }
          if(option.opt === opt){
            option.active = true
            SetPrice(state=>state + option.price)
          }
        
          return option
        })
        return state
      })

      if(activeStep+1 === steps.length){
        router.push('/final-price')
        return
      }
      setActiveStep(state => state+1)
  },[activeStep,price])

  const prevStep = useCallback(()=>{
    if(activeStep>0){
      setActiveStep(state=>state-1)
    }
  },[activeStep])

  const goToSpecificStep = useCallback((opt:string)=>{
    const actualStep = steps.findIndex(step=>step.options.find(option=>option.opt=== opt))
    setActiveStep(actualStep)
    router.push('/')

  },[])

  return (
    <BudgetContext.Provider value={{
      price,
      nextStep,
      prevStep,
      goToSpecificStep,
      setChoosedDomain,
      nextStepYear,
      setActiveStep,
      years,
      choosedDomain,
      activeStep,
      steps
    }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default useBudget