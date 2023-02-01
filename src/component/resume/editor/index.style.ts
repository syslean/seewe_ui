import styled from "styled-components";

export const EditorWrapper = styled.div`
  height: calc(100vh - 9rem);
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #F9F9F9;

  overflow-y: scroll;
  flex: 5 3;

  &::-webkit-scrollbar {
    display: none;
  }
`
