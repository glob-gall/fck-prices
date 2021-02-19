import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`

export const Link = styled.a`
  display:flex;
  flex-direction:row;
  align-items:center;

  text-decoration:none;
  color:#303030;
  margin-top:1rem;
  width:10rem;
  display:block;
  text-align:center;
  font-size:24px;
  cursor: pointer;

  ${media.lessThan('medium')`
  width:5rem;
    span{
      display:none;
    }
  `}
`

export const Logo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:1rem;
  img{
    width:9rem;
  }
  ${media.lessThan('medium')`
    img{
      width:8rem;
    }
  `}
`

export const TotalPrice = styled.h1`

  font-size:52px;
  text-align:center;
  margin-bottom: 1rem;
  
  display:flex;
  flex-direction:column;
  span{
    font-size:82px;
    color:#79D363;
  }
  ${media.lessThan('medium')`
    font-size:34px;
    span{
      font-size:52px;
    }
  `}
`

export const ButtonWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  a{
    text-decoration:none;
  }
`

const Button = styled.button`
  padding:1rem 2rem;
  display:flex;
  max-width:18rem;
  height:4rem;
  border:none;
  border-radius:0.15rem;
  color:#fff;
  font-size:24px;
  transition:0.2s;
  margin: 0.5rem 1rem;
  font-weight:bold;
  img{
    max-height:100%;
    margin-right:1rem;
  }
  
  
`

export const ConfirmButton = styled(Button)`
  max-width:100%;
  height:auto;
  background:#79D363;
  
  
  font-size:24px;

  &:hover{
    background:#79D363dd;
  }
  ${media.lessThan('medium')`
    font-size:18px;
  `}
`

export const WhatsappButton = styled(Button)`
  background:#A2F5A5;
  font-size:16px;
  color:#303030;
  
  &:hover{
    background:#A7F6AB;
  }
  ${media.lessThan('medium')`
    font-size:14px;
  `}
`
export const EmailButton = styled(Button)`
  background:#FFE79B;
  font-size:16px;
  color:#303030;
  &:hover{
    background:#FFE89F;
  }
  ${media.lessThan('medium')`
    font-size:14px;
  `}
`

export const Options = styled.div`
  max-width:60rem;
  margin-left: auto;
  margin-right:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  position:relative;
    margin-bottom:2rem;
  ${media.lessThan('medium')`
    margin-top:1rem;
  `}
`

export const OptionsTitle = styled.h2`
  position:absolute;
  top:-2.4rem;
  left:50%;
  transform:translateX(-50%);
  
`

export const DomainAndYears = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  margin-bottom:3rem;

  div{
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:0.5rem;
    width:18rem;
    margin:0.5rem;

    border-radius:2px;
    background:#ddd;
    border:1px solid #60606060;
    h2{
      font-size:18px;
    }
  }
  p{
    color:#606060;
  }
`