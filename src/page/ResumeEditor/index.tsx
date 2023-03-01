import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import {ResumeWrapper} from "./index.style";
import {resumeConfig} from "../../component/resumeEditor/editor/generator/config";

export const RESUME_COMPONENT_MAPPING =
  Object.fromEntries(resumeConfig.modules.map(item => [item.label, item]))

const Resume: React.FC = () => {
  const resumeItems = Object.keys(RESUME_COMPONENT_MAPPING);

  return (
    <ResumeWrapper>
      <SideBar labels={resumeItems}/>
      <Editor labels={resumeItems}/>
    </ResumeWrapper>
  )
}

export default Resume;
