import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`
export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:1rem;
`

export const Link = styled.a`
  display:flex;
  flex-direction:row;
  align-items:center;

  text-decoration:none;
  color:#303030;
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
export const HomeButton = styled.a`
  text-decoration:none;
  color:#fff;
  font-size:18px;
  background:#4961D2;
  padding:0.6rem 2rem;
  border-radius:2px;
`

export const Logo = styled.a`
  margin:1rem auto;
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
  >div{
    display:flex;
    flex-direction:column;
  }
  span{
    font-size:78px;
    color:#79D363;
  }
  
  ${media.lessThan('medium')`
    font-size:34px;
    span{
      font-size:52px;
    }
  `}
`
export const YearPriceContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
export const YearPrice = styled.div`
  cursor:pointer;
  font-size:24px;
  color:#ff9f1c;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  margin:0 2rem;
  position:relative;

  input{
    display:none;
  }
  label{
    cursor:pointer;
  }
  .radio{
    position: absolute;
    top: 0;
    left: -1.6rem;
    height: 25px;
    width: 25px;
    border-radius:50%;
    transition:0.2s;
  }
  .radio::before{
    position:absolute;
      content:'';
      width:20px;
      height: 20px;
      border-radius:50%;
      background:#fff;
      left:50%;
      top:50%;
      transform:translateY(-50%) translate(-50%);
  }
  .radio::after{
    transition:0.5s;
    position:absolute;
      content:'';
      width:10px;
      height: 10px;
      border-radius:50%;
      border:5px solid #fff;
      left:50%;
      top:50%;
      transform:translateY(-50%) translate(-50%);
  }
  
  input:checked ~.radio{
    &::after{
      border:5px solid #ff9f1c;
      background:#fff;
    }
  }
  &:hover{
    .radio::before{
      background:#ddd;
    }
  }
`

export const ButtonWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin:1rem auto 2rem;
  flex-direction:column;
  text-align:center;
  div{
    display:flex;
    justify-content:center;
  }
  a{
    text-decoration:none;
  }
`

const Button = styled.button`
  padding:1rem 2rem;
  display:flex;
  align-items:center;
  justify-content:center;
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
export const ComfirmButtonWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
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

export const ButtonsTitle = styled.h2`
  margin-bottom:0.5rem;
`

const buttonLink = styled.a`
  margin:0.5rem;
  border-radius:0.2rem;
  padding:1rem 2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  max-width:18rem;
  height:4rem;
  img{
      max-height:100%;
      margin-right:1rem;
    }
` 
export const WhatsappButton = styled(buttonLink)`
  background:#A2F5A5;
  font-size:16px;
  color:#303030;
  width:14rem;
  &:hover{
    background:#A7F6AB;
  }
  ${media.lessThan('medium')`
    font-size:14px;
  `}
`
export const EmailButton = styled(buttonLink)`
  background:#FFE79B;
  font-size:16px;
  color:#303030;
  width:14rem;
  &:hover{
    background:#FFE89F;
  }
  ${media.lessThan('medium')`
    font-size:14px;
  `}
`

export const Options = styled.div`
  margin-top:2rem;
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
  align-items:center;
  text-align:center;
  justify-content:center;
  margin:0.5rem;
  width:20rem;
  height:8rem;
  font-size:22px;
  padding:1rem;
  cursor:pointer;

  background:#C7EBFF60;
  border:2px solid #C7EBFF00;
  ${media.lessThan('medium')`
    width:16rem;
    height:6rem;
    font-size:18px;
  `}
  transition:0.5s;
  &:hover{
    background:#C7EBFF90;
    border:2px solid #C7EBFF;
    transform:translateY(-0.5rem);
  }
`