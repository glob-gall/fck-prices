import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div``

export const Header = styled.span`
position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  text-align:center;

  font-size:24px;
  margin-bottom:6rem;
  padding-top:1rem;

  ${media.lessThan('medium')`
    font-size:18px;
  `}
`

export const PrevButton = styled.button`
display:flex;
align-items:center;
justify-content:center;

background:none;
border:none;
font-size:24px;

${media.lessThan('medium')`
    p{
      display:none;
    }
  `}
`

export const StepCounter = styled.div`
display:flex;
justify-content:center;

position:absolute;
left:50%;
`

export const TotalPrice = styled.div`
  
`