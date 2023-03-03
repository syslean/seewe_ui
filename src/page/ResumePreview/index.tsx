import React from "react";
import {ResumePreviewWrapper} from "./index.style";
import PDFViewer from "../../component/resumePreview/pdfViewer";
import ActionBar from "../../component/resumePreview/actionBar";

const Preview: React.FC = () => {
  return (
    <ResumePreviewWrapper>
      <ActionBar />
      <PDFViewer />
    </ResumePreviewWrapper>
  )
}

export default Preview;
