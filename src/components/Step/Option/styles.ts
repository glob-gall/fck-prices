import styled, { css } from 'styled-components'

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
  justify-content:center;
  align-items:center;
  text-align:center;
  cursor: pointer;

  margin:0.5rem;
  width:16rem;
  
  padding:1rem;

  border-radius:0.2rem;
  img{
      width:10rem;
      height:10rem;
    }

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
margin-top:0.5rem;
`

export const Description = styled.span`
  font-size:16px;
  color:#909090;
  font-weight:bold;
`