import Head from 'next/head'
import GlobalStyle from '../styles/Global'
import { AppProps } from 'next/app'
import { BudgetProvider } from '../hooks/useBudget'

import donthave from '../public/static/svgs/donthave.svg'
import have from '../public/static/svgs/have.svg'

import ecommerce from '../public/static/svgs/ecommerce.svg'
import normal from '../public/static/svgs/normal.svg'
import portfolio from '../public/static/svgs/portfolio.svg'

import hands from '../public/static/svgs/hands.svg'
import wordpress from '../public/static/svgs/wordpress.svg'
import woocommerce from '../public/static/svgs/woocommerce.svg'
import shopify from '../public/static/svgs/shopify.svg'
import wix from '../public/static/svgs/wix.svg'
import paint from '../public/static/svgs/paint.svg'
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
        img:ecommerce,
        img_alt:'um celular, uma moeda e um carrinho de compras',
        text:'E-commerce',
        description:'(loja virtual)',
        opt:'ecommerce',
        price:2000
      },
      {
        img:normal,
        img_alt:'um frame de um site simplicifado',
        text:'Site institucional',
        description:'(site sobre sua empresa)',
        opt:'site-institucional',
        price:1000
      },
      {
        img:portfolio,
        img_alt:'uma pasta com um documendo para fora',
        text:'Site pessoal',
        description:'(portfólio com seu contato)',
        opt:'site-pessoal',
        price:500
      }
    ]
  },
  {
    question:'Plataforma',
    options:[
      {
        img:hands,
        img_alt:'aperto de mãos',
        text:'Escolha para mim',
        opt:'any',
        price:1300
      },
      {
        img:wordpress,
        img_alt:'icone wordpress',
        text:'Wordpress',
        opt:'wordpress',
        price:1375
      },
      {
        img:woocommerce,
        img_alt:'icone woocomerce',
        text:'Woocomerce',
        opt:'woocomerce',
        price:1321
      },
      {
        img:shopify,
        img_alt:'icone shopify',
        text:'Shopify',
        opt:'shopify',
        price:1321
      },
      {
        img:wix,
        img_alt:'icone wix',
        text:'Wix',
        opt:'wix',
        price:545
      },
      {
        img:paint,
        img_alt:'pincel',
        text:'Sem web builder!',
        opt:'no-web-builder',
        price:790
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