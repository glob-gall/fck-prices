import styled, { css } from 'styled-components'

type ContainerProps = {
  active ?: boolean
}

const OptionModifier = {
  active : () =>css`
    background:#00000080;
  `
}

export const Wrapper = styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  margin:0.5rem;
  width:16rem;
  font-size:22px;
  padding:1rem;

  border-radius:0.2rem;
  img{
      max-width:100%;
    }

  transition:0.5s;
  &:hover{
    background:#00000040;
    transform:translateY(-0.5rem);
  }

  ${({active})=>css`
  ${active && OptionModifier.active()}
  `}
`