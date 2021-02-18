import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, X as FiX } from '@styled-icons/feather'
import api from '../../api'
import Logo from '../../public/static/svgs/logo-light.svg'
import * as S from './styles'
import useBudget from '../../hooks/useBudget'
import { useRouter } from 'next/router'

function ChooseDomainName(){
  const router = useRouter()
  const {goToSpecificStep,setChoosedDomain} = useBudget()
  const [domain,setDomain] = useState('')
  const [domainSearchResult,setDomainSearchResult] = useState<'Erro'|'disponível'|'Em uso'|''>('')
  const [loading,setLoading] = useState(false)

  const getDomainStatus = useCallback(async (domain:string) => {
    const {data} = await api.get('',{params:{'domainName':domain}})
      
      if(domain ===''){
        setLoading(false)
        return
      }
      
      if(data?.ErrorMessage){
        setDomainSearchResult('Erro')
      }else if(!data?.WhoisRecord.estimatedDomainAge){
      setDomainSearchResult('disponível')
      }else if(data?.WhoisRecord.estimatedDomainAge){
        setDomainSearchResult('Em uso')
      }else{
        setDomainSearchResult('')
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

  const handleComeBack = useCallback(()=>{
    goToSpecificStep('have-a-domain')
  },[])

  const handleConfirm = useCallback(()=>{
    setChoosedDomain(domain)
    router.push('/')
  },[domain])

  return (
    <S.Wrapper>
    
      <S.Link onClick={handleComeBack}>
        <ArrowLeft size={36}/> 
        <span>Voltar</span>
      </S.Link>
      
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
        
          disabled={!(domainSearchResult==="disponível")} 
          onClick={()=>handleConfirm()}
        >
          Confirmar
        </S.ButtonAccept>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ChooseDomainName