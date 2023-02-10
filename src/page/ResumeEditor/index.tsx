import React from 'react';
import SideBar from "../../component/resumeEditor/sidebar";
import Editor from "../../component/resumeEditor/editor";
import {ReactComponent as ProfileLogo} from "../../assets/img/profile.svg";
import {ReactComponent as EducationsLogo} from "../../assets/img/educations.svg";
import {ReactComponent as ExperiencesLogo} from "../../assets/img/experiences.svg";
import {ResumeWrapper} from "./index.style";
import {CardGenerator, ListCardGenerator} from "../../component/resumeEditor/editor/generator";
import {config} from "../../component/resumeEditor/editor/generator/config";

export const RESUME_COMPONENT_NAME = {
  PROFILE: 'sidebar.profile',
  EDUCATIONS: 'sidebar.educations',
  EXPERIENCES: 'sidebar.experiences',
  PUBLICATIONS: 'sidebar.publications'
};

export const RESUME_COMPONENT_MAPPING = {
  [RESUME_COMPONENT_NAME.PROFILE]: {
    component: <CardGenerator module={config.modules[0]}/>,
    icon: <ProfileLogo/>
  },
  [RESUME_COMPONENT_NAME.EDUCATIONS]: {
    component: <ListCardGenerator module={config.modules[1]}/>,
    icon: <EducationsLogo/>
  },
  [RESUME_COMPONENT_NAME.EXPERIENCES]: {
    component: <ListCardGenerator module={config.modules[2]}/>,
    icon: <ExperiencesLogo/>
  },
  [RESUME_COMPONENT_NAME.PUBLICATIONS]: {
    component: <ListCardGenerator module={config.modules[3]}/>,
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
