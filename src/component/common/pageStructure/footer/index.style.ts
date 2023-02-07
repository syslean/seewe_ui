import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  height: 3rem;
  width: 100%;
  bottom: 0;
  background-color: #162A48;

  // phone size
  @media (max-width: 480px) {
    height: 1.5rem;
  }
`

export const Copyright = styled.div`
  line-height: 3rem;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1020px;
  font-family: "Open Sans", serif;
  font-size: 0.75rem;
  color: #E5EFFF;

  // phone size
  @media (max-width: 480px) {
    line-height: 1.5rem;
  }
`
