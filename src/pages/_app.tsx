import Head from 'next/head'
import GlobalStyle from '../styles/Global'
import { AppProps } from 'next/app'
import { BudgetProvider } from '../hooks/useBudget'

import donthave from '../public/static/svgs/donthave.svg'
import have from '../public/static/svgs/have.svg'

import ecommercepremium from '../public/static/svgs/e-commercepremium.svg'
import ecommerce from '../public/static/svgs/ecommerce.svg'
import normal from '../public/static/svgs/normal.svg'
import portfolio from '../public/static/svgs/portfolio.svg'
import mailing from '../public/static/svgs/mailing.svg'

import icon from '../public/static/icons/myboy.ico'

import { StepProps } from '../components/Step'


const steps = [
  {
    question:'Você já tem um domínio cadastrado?',
    options: [
      {
        img:donthave,
        img_alt:'um celular, uma moeda e um carrinho de compras',
        text:'Já tenho um domínio',
        description:'',
        opt:'have-a-domain',
        price:0,
      },
      {
        img:have,
        img_alt:'um celular, uma moeda e um carrinho de compras',
        text:'Escolher um domínio',
        description:'',
        opt:'dont-have-a-domain',
        price:40,
        redirect:'/choose-domain'
      }
    ]
  },
  {
    question:'Tipo de site',
    options: [
      {
        img:ecommercepremium,
        img_alt:'um celular, uma moeda e um carrinho de compras',
        text:'E-commerce Gold',
        description:'Integração com Woocomerce',
        opt:'ecommerce-gold',
        price:3500,
        hostPrice: 320
      },
      {
        img:ecommerce,
        img_alt:'um celular, uma moeda e um carrinho de compras',
        text:'E-commerce',
        description:'loja virtual',
        opt:'ecommerce',
        price:1440,
        hostPrice: 160
      },
      {
        img:normal,
        img_alt:'um frame de um site simplicifado',
        text:'Site institucional',
        description:'site sobre sua empresa',
        opt:'site-institucional',
        price:480,
        hostPrice: 28
      },
      {
        img:portfolio,
        img_alt:'uma pasta com um documendo para fora',
        text:'Site pessoal',
        description:'portfólio com seu contato',
        opt:'site-pessoal',
        price:320,
        hostPrice: 156
      },
      {
        img:mailing,
        img_alt:'uma pasta com um documendo para fora',
        text:'Página simples',
        description:'captação de emails e divulgação',
        opt:'site-simples',
        price:112,
        hostPrice:6
      }
    ]
  },
  {
    question:'Por quantos anos pretende manter o site ativo?',
    options:[],
    rangeItems:[
      {
        text:'1 Ano',
        opt:1,
        price:100
      },
      {
        text:'2 Anos',
        opt:2,
        price:200
      },
      {
        text:'3 Anos',
        opt:3,
        price:300
      },
      {
        text:'4 Anos',
        opt:4,
        price:400
      },
      {
        text:'5 Anos',
        opt:5,
        price:500
      },
    ]
  },
] as StepProps[]

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Fcktiming | Faça seu orçamento</title>
      <link rel="shortcut icon" type="image/x-icon" href={icon} />
      </Head>
      <GlobalStyle/>
      <BudgetProvider initialSteps={steps}>
        <Component {...pageProps} />
      </BudgetProvider>
    </>
    
  )
  }

export default App