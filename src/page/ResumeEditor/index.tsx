import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import Profile from "../../component/resumeEditor/editor/profile";
import {ResumeWrapper} from "./index.style";

const Resume: React.FC = () => {
  const resumeItems = [
    {title: 'Basics', modal: <Profile />},
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
