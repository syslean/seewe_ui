import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import Profile from "../../component/resumeEditor/editor/profile";
import {ResumeWrapper} from "./index.style";

export const RESUME_COMPONENT_NAME = {
  PROFILE: 'profile',
};

export const RESUME_COMPONENT_MAPPING = {
  [RESUME_COMPONENT_NAME.PROFILE]: <Profile/>
}

const Resume: React.FC = () => {
  const resumeItems = [
    {title: RESUME_COMPONENT_NAME.PROFILE},
    {title: RESUME_COMPONENT_NAME.PROFILE},
  ];

  return (
    // <ResumeProvider>
    <ResumeWrapper>
      <SideBar items={resumeItems}/>
      <Editor items={resumeItems}/>
    </ResumeWrapper>
    // </ResumeProvider>
  )
}

export default Resume;
