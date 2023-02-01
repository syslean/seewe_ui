import React from 'react';
import SideBar from "../../component/resume/sidebar";
import Editor from "../../component/resume/editor";
import {ResumeProvider} from "./resumeContext";
import {ShoppingFilled, UserOutlined} from "@ant-design/icons";
import {EducationIcon, PublicationIcon, SkillIcon} from "../../component/common/icons";
import Basics from "../../component/resume/basics";
import Works from "../../component/resume/works";
import {ResumeWrapper} from "./index.style";

const Resume: React.FC = () => {
  const resumeItems = [
    {title: 'Basics', icon: <UserOutlined/>, modal: <Basics/>},
    {title: 'Works', icon: <ShoppingFilled/>, modal: <Works/>},
    {title: 'Skills', icon: <SkillIcon/>, modal: <Basics/>},
    {title: 'Educations', icon: <EducationIcon/>, modal: <Basics/>},
    {title: 'Publications', icon: <PublicationIcon/>, modal: <Basics/>},
  ];

  return (
    <ResumeProvider>
      <ResumeWrapper>
        <SideBar items={resumeItems}/>
        <Editor items={resumeItems}/>
      </ResumeWrapper>
    </ResumeProvider>
  )
}

export default Resume;
