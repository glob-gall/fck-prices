import styled from 'styled-components'

export const Wrapper = styled.div`
  display:flex;
  align-items:center;
  text-align:center;
  cursor: pointer;

  margin:0.5rem;
  width:20rem;
  height:8rem;
  font-size:22px;
  padding:1rem;

  

  img{
      max-width:100%;
      max-height:100%;
    }
    span{
      flex:1;
      text-align:center;
    }

  transition:0.5s;
  background:#C7EBFF60;
  border:2px solid #C7EBFF00;
  
  border-radius:0.2rem;
  &:hover{
    background:#C7EBFF90;
    border:2px solid #C7EBFF;
    transform:translateY(-0.5rem);
  }
`