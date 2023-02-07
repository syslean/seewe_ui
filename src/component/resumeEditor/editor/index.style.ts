import styled from "styled-components";

export const EditorWrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #235385;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  // phone size
  @media (max-width: 480px) {
    margin-right: 0;
  }
`

export const EditorInnerCard = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  background: #FFFFFF;

  box-shadow: 0 2px 4px 0 rgba(197, 197, 197, 0.3);
`
