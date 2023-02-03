import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import Profile from "../../component/resumeEditor/editor/profile";
import {ReactComponent as ProfileLogo} from "../../assets/img/profile.svg";
import {ReactComponent as EducationsLogo} from "../../assets/img/educations.svg";
import {ReactComponent as ExperiencesLogo} from "../../assets/img/experiences.svg";
import {ResumeWrapper} from "./index.style";
import Educations from "../../component/resumeEditor/editor/educations";

export const RESUME_COMPONENT_NAME = {
  PROFILE: 'Profile',
  EDUCATIONS: 'Educations',
  EXPERIENCES: 'Experiences'
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
    component: <Profile/>,
    icon: <ExperiencesLogo/>
  }
}

const Resume: React.FC = () => {
  const resumeItems = [
    {title: RESUME_COMPONENT_NAME.PROFILE, label: "sidebar.profile.label"},
    {title: RESUME_COMPONENT_NAME.EDUCATIONS, label: "sidebar.educations.label"},
    {title: RESUME_COMPONENT_NAME.EXPERIENCES, label: "sidebar.experiences.label"},
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
