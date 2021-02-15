import Container from '../components/Container'
import Head from 'next/head'
import PriceCalculator from '../components/PriceCalculator'

export default function Home() {
  return (
    <>
    <Head>
      <title>Fcktiming | Faça seu orçamento</title>
    </Head>
    
    <Container>
      <PriceCalculator />
    </Container>
    </>
  )
}
