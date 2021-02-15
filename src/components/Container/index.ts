import styled from "styled-components";
import media from 'styled-media-query'

export default styled.div`
  width:100%;
  max-width:92rem;
  margin:0 auto;
  padding:0 2rem;

  ${media.lessThan('medium')`
  padding:0 1rem;
  `}
`