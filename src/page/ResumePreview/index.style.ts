import styled from "styled-components";

export const PreviewContainer = styled.div`
  height: calc(100vh - 8.6rem);
  margin: 0.75rem auto;
  width: 100%;
  max-width: 1020px;
  overflow: scroll;
  display: flex;
  justify-content: center;

  #pdfobject {
    width: inherit;
  }
`
