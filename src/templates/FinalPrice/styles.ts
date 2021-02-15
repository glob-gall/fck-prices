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
  /* padding:1rem; */
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
export const ConfirmButton = styled.button`
  margin-bottom:4rem;
  padding:1rem 2rem;
  /* width:18rem; */

  background:#79D363;
  border:none;
  border-radius:0.2rem;

  font-size:24px;
  color:#fff;
  font-weight:bold;

  margin:0 auto 4rem;
`

export const Options = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  position:relative;
  ${media.lessThan('medium')`
    margin-top:1rem;
    margin-bottom:1rem;
  `}
`

export const OptionsTitle = styled.h2`
  position:absolute;
  top:-2.4rem;
  left:50%;
  transform:translateX(-50%);
  
`