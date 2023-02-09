import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import Profile from "../../component/resumeEditor/editor/profile";
import {ReactComponent as ProfileLogo} from "../../assets/img/profile.svg";
import {ReactComponent as EducationsLogo} from "../../assets/img/educations.svg";
import {ReactComponent as ExperiencesLogo} from "../../assets/img/experiences.svg";
import {ResumeWrapper} from "./index.style";
import Educations from "../../component/resumeEditor/editor/educations";
import Experiences from "../../component/resumeEditor/editor/experiences";
import CardGenerator from "../../component/resumeEditor/editor/cardGenerator/intex";

export const RESUME_COMPONENT_NAME = {
  PROFILE: 'sidebar.profile',
  EDUCATIONS: 'sidebar.educations',
  EXPERIENCES: 'sidebar.experiences',
  PUBLICATIONS: 'sidebar.publications'
};

export const RESUME_COMPONENT_MAPPING = {
  [RESUME_COMPONENT_NAME.PROFILE]: {
    component: <Profile/>,
    icon: <ProfileLogo/>
  },
  [RESUME_COMPONENT_NAME.EDUCATIONS]: {
    component: <Educations/>,
    icon: <EducationsLogo/>
  },
  [RESUME_COMPONENT_NAME.EXPERIENCES]: {
    component: <Experiences/>,
    icon: <ExperiencesLogo/>
  },
  [RESUME_COMPONENT_NAME.PUBLICATIONS]: {
    component: <CardGenerator/>,
    // todo: icon
    icon: <ExperiencesLogo/>
  }
}

const Resume: React.FC = () => {
  const resumeItems = [
    {label: RESUME_COMPONENT_NAME.PROFILE},
    {label: RESUME_COMPONENT_NAME.EDUCATIONS},
    {label: RESUME_COMPONENT_NAME.EXPERIENCES},
    {label: RESUME_COMPONENT_NAME.PUBLICATIONS},
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
