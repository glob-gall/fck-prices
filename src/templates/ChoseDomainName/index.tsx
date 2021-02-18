import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, X as FiX } from '@styled-icons/feather'
import api from '../../api'
import Logo from '../../public/static/svgs/logo-light.svg'
import * as S from './styles'

function ChooseDomainName(){
  const [domain,setDomain] = useState('')
  const [domainSearchResult,setDomainSearchResult] = useState<'error'|'available'|'in use'|''>('')
  const [loading,setLoading] = useState(false)

  const getDomainStatus = useCallback(async (domain:string) => {
      
      if(domain ===''){
        setLoading(false)
        return
      }
      
    const {data} = await api.get('',{params:{
      domainName: domain
    }})
    
    if(data.ErrorMessage){
      setDomainSearchResult('error')
    }else if(data.WhoisRecord.dataError){
      setDomainSearchResult('available')
    }else if(data.WhoisRecord.administrativeContact){
      setDomainSearchResult('in use')
    }
    setLoading(false)
  },[setLoading,setDomainSearchResult])
  
  useEffect(()=>{
    if(domain !==''){
      setLoading(true)
    }
    const timer = setTimeout(()=>getDomainStatus(domain),2000)
  
    return(()=>{
      clearTimeout(timer)
    })
    
  },[domain])

  const handleClearInput = useCallback(()=>{
    setDomain('')
    setDomainSearchResult('')
  },[setDomain])

  return (
    <S.Wrapper>
    
      <Link href="/" passHref>
      <S.Link>
        <ArrowLeft size={36}/> 
        <span>Voltar</span>
      </S.Link>
      </Link>
      
      <S.Image src={Logo}/>
      <S.Title>Verifique se o domínio esta disponível</S.Title>
      <S.SubTitle>(este recurso está em fase de testes, as informaçẽos podem estar incorretas)</S.SubTitle>
      <S.InputContainer>
        <input value={domain} onChange={e=> setDomain(e.target.value)} placeholder='Exemplo: dominioincrivel.com.br'/>
        {
        domain && <button onClick={handleClearInput}><FiX size={30}/></button>
        }
      </S.InputContainer>
      {loading && <p>loading...</p>}
      {(!loading && domain) && domainSearchResult}
      <S.ButtonWrapper>
        <S.ButtonCancel>Cancelar</S.ButtonCancel>
        <S.ButtonAccept 
        
          disabled={!(domainSearchResult==="available")} 
          onClick={()=>console.log('teste')}
        >
          Confirmar
        </S.ButtonAccept>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ChooseDomainName