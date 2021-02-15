import GlobalStyle from '../styles/Global'
import { AppProps } from 'next/app'
import { BudgetProvider } from '../hooks/useBudget'

const steps = [
  {
    question:'Step One',
    options: [
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-1-1.png',
        img_alt:'a cellphone and a computer',
        text:'Ótima qualidade',
        opt:'quality',
        price:1000
      },
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-1-2.png',
        img_alt:'uma balança com design e ouro',
        text:'Boa relação de qualidade e preço',
        opt:'price-quality',
        price:500
      }
    ]
  },
  {
    question:'Step Two',
    options:[
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-2-3.png',
        img_alt:'a cellphone and a computer',
        text:'Option 2',
        opt:'hamb',
        price:1000
      },
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-2-4.png',
        img_alt:'uma balança com design e ouro',
        text:'Option 3',
        opt:'price-hamb',
        price:500
      }
    ]
  },
  {
    question:'Wich interface you want?',
    options:[
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-3-3.png',
        img_alt:'a cellphone and a computer',
        text:'Interface mobile',
        opt:'mobile',
        price:1000
      },
      {
        img:'https://www.quantocustaumaplicativo.com/img/app/answer-3-2.png',
        img_alt:'uma balança com design e ouro',
        text:'Interface web',
        opt:'web',
        price:500
      }
    ]
  }
]

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <BudgetProvider initialSteps={steps}>
        <Component {...pageProps} />
      </BudgetProvider>
    </>
    
  )
  }

export default App