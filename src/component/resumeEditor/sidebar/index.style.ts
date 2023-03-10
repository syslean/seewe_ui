import styled from "styled-components";

export const SideBarWrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  background-color: #235385;;
  width: 11rem;
  display: flex;
  flex-direction: column;
  // phone size
  @media (max-width: 480px) {
    display: none;
  }
`
