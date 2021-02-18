import styled,{css} from "styled-components";
import media from "styled-media-query";
import Container from '../../components/Container'

export const Wrapper = styled(Container)`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;

  min-height:100vh;
`
export const Link = styled.a`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-right:auto;

  text-decoration:none;
  color:#303030;
  margin-top:1rem;
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

export const Image = styled.img`
  margin-top:4rem;
  width:9rem;
`

export const Title = styled.h1`
  margin-top:2rem;
`
export const SubTitle = styled.h2`
  font-size:14px;
  margin-top:0.5rem;
  color:#606060;
`

export const InputContainer = styled.div`
  display:flex;
  width:30rem;
  max-width:100%;
  margin-top:2rem;
  border-radius:2px;
  border:1px solid #60606060;
  background:#fff;
  overflow:hidden;

  input{
  font-size:18px;
  padding:0.6rem 0.6rem 0.4rem;
    flex:1;
    border:none;
  }

  button{
    width:2.6rem;
    background:none;
    border:none;
    color:#606060;
    position:relative;
    color:#EE5E5E;

    transition:0.2s ;
    &:hover{
      color:#fff;
      background:#EE5E5E;
    }
  }
`

export const ButtonWrapper = styled.div`
  display:flex;
  width:30rem;
  max-width:100%;
  justify-content:space-between;
`

type ButtonProps = {
  disabled?:boolean
}

export const Button = styled.button<ButtonProps>`
  width:10rem;
  padding:0.5rem 1rem;
  margin:1rem 0;

  font-size:18px;

  color:#404040;
  background:#f2f2f2;
  border:1px solid #60606060;
  border-radius:2px;
`
export const ButtonCancel = styled(Button)`
  background:#EE5E5E;
`
export const ButtonAccept = styled(Button)`
    background:#64D46C;
  ${({disabled})=> css`
    ${disabled && css`
      background:#ddd;
      cursor:not-allowed;
    `}
  `}
`