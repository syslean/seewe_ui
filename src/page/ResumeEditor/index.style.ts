import styled from "styled-components";

export const ResumeWrapper = styled.div`
  height: calc(100vh - 8.5rem);
  max-width: 1020px;
  width: 100%;
  margin: 0.75rem auto;
  display: flex;


  // phone size
  @media (max-width: 480px) {
    height: calc(100vh - 7rem);
  }
`
