import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ContainerProps = {
  active ?: boolean
}

const OptionModifier = {
  active : () =>css`
    background:#C7EBFF90;
    border:2px solid #C7EBFF;
  `
}

export const Wrapper = styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  cursor: pointer;
  border:2px solid transparent;

  margin:0.5rem;
  width:16rem;
  /* height:14rem; */
  
  padding:1rem 0.5rem;

  border-radius:0.2rem;
  img{
      width:10rem;
      height:10rem;
    }
  

  ${media.between('medium',"huge")`
    width:14rem;
    img{
        width:6rem;
        height:6rem;
      }
  `}
  ${media.lessThan('medium')`
    width:12rem;
  img{
      width:3.4rem;
      height:3.4rem;
    }
  `}

  transition:0.5s;
  &:hover{
    background:#C7EBFF60;
    transform:translateY(-0.5rem);
  }

  ${({active})=>css`
  ${active && OptionModifier.active()}
  `}
`

export const Title = styled.strong`
  font-size:22px;
  margin-top:1rem;
  ${media.lessThan('medium')`
    font-size:18px;
    margin-top:0.5rem;
  `}
`

export const Description = styled.span`
  font-size:14px;
  color:#909090;
  font-weight:bold;
  margin-top:0.5rem;
  ${media.lessThan('medium')`
    font-size:14px;
    margin-top:0.5rem;
  `}
`