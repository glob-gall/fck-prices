import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`

export const Link = styled.a`
  margin:1rem;
  width:5rem;
  padding:1rem;
  display:block;
  text-align:center;

  
  &:hover{
    background:#D36363;
  }
`

export const TotalPrice = styled.h1`
  font-size:52px;
  text-align:center;
  margin:8rem 0 1rem;
  
  display:flex;
  flex-direction:column;
  span{
    font-size:82px;
    color:#79D363;
  }
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
`

export const OptionsTitle = styled.h2`
  position:absolute;
  top:-2.4rem;
  left:50%;
  transform:translateX(-50%);
`