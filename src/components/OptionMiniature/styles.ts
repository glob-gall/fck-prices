import styled from 'styled-components'

export const Wrapper = styled.div`
  display:flex;
  align-items:center;
  text-align:center;

  margin:0.5rem;
  width:20rem;
  height:8rem;
  font-size:22px;
  padding:1rem;

  border-radius:0.2rem;
  border:2px solid #00000020;

  img{
      max-width:100%;
      max-height:100%;
    }
    span{
      flex:1;
      text-align:center;
    }

  transition:0.5s;
  background:#00000010;
  &:hover{
    background:#00000040;
    transform:translateY(-0.5rem);
  }
`