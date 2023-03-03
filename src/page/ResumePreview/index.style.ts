import styled from "styled-components";

export const ResumePreviewWrapper = styled.div`
  height: calc(100vh - 8.5rem);
  max-width: 1020px;
  width: 100%;
  margin: 0.75rem auto;
  display: flex;
  flex-direction: column;

  #pdfobject {
    width: inherit;
    flex: 1;
  }
`
