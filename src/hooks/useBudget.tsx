import {useRouter} from 'next/router'

import { createContext, useCallback, useContext, useState } from "react";
import { StepProps } from "../components/Step";

type IbudgetProvider ={
  nextStep(opt:string):void
  prevStep():void
  goToSpecificStep(step:string):void
  totalPrice:number
  activeStep:number
  steps: StepProps[]
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
  const [totalPrice,setTotalPrice] = useState(0)

  const nextStep = useCallback(
    (opt:string)=>{
      setSteps(state=>{

        state[activeStep].options = state[activeStep].options.map(option=>{
          if(option.opt === opt && option.active) {
            return option
          }
          if(option.opt !== opt && option.active){
            setTotalPrice(state=>state - option.price)
            option.active = false
          }
          
          if(option.opt === opt){
            option.active = true
            setTotalPrice(state=>state+ option.price)
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
  },[activeStep,totalPrice])

  const prevStep = useCallback(()=>{
    const a = steps[activeStep].options.find(option=> option.active===true)
    console.log(a)
    

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
      nextStep,
      prevStep,
      goToSpecificStep,
      totalPrice,
      activeStep,
      steps
    }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default useBudget