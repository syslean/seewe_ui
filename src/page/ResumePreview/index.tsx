import React from "react";
import {ResumePreviewWrapper} from "./index.style";
import PDFViewer from "../../component/resumePreview/pdfViewer";

const Preview: React.FC = () => {

  return (
    <ResumePreviewWrapper>
      {/*action zone*/}
      <PDFViewer />
    </ResumePreviewWrapper>
  )
}

export default Preview;
