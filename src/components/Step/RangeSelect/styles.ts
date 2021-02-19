import styled from "styled-components";

export const Wrapper = styled.ul`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:40rem;
  max-width:100%;
  height:0.5rem;

  margin-top:2rem;
  list-style:none;

  background:#FFB906;
`

export const Item = styled.li`
    position:relative;
    cursor: pointer;
  div{
  margin:0 -0.1rem;
  background:#FFB906;
  width:2rem;
  height:2rem;
  border-radius:50%;
  

  transition:0.2s;
    &:hover{
      transform:scale(1.3);
      background:#E9AA09;
    }
  }

  p{
    position:absolute;
    top:150%;
    left:50%;
    transform:translate(-50%);

    width:4rem;
    text-align:center;

    font-size:18px;
  }
`