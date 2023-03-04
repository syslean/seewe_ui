import React, {useContext} from 'react';
import {MenuTitle, MenuIcon, MenuItemWrapper} from "./index.style";
import {RESUME_COMPONENT_MAPPING} from "../../../../page/ResumeEditor";
import {LanguageContext} from "../../../../context/LanguageContext";
import {ReactComponent as ProfileLogo} from "../../../../assets/img/profile.svg";
import {ReactComponent as EducationsLogo} from "../../../../assets/img/educations.svg";
import {ReactComponent as ExperiencesLogo} from "../../../../assets/img/experiences.svg";
import {ReactComponent as PublicationsLogo} from "../../../../assets/img/publications.svg";
import {ReactComponent as SkillsLogo} from "../../../../assets/img/skills.svg";

interface Props {
  label: string;
}

export enum ICON_TYPE {
  PROFILE = "PROFILE_ICON",
  EDUCATIONS = "EDUCATIONS_ICON",
  EXPERIENCES = "EXPERIENCES_ICON",
  PUBLICATIONS = "PUBLICATIONS_ICON",
  SKILLS = "SKILLS_ICON"
}

const ICON_MAPPING = {
  [ICON_TYPE.PROFILE]: <ProfileLogo/>,
  [ICON_TYPE.EDUCATIONS]: <EducationsLogo/>,
  [ICON_TYPE.EXPERIENCES]: <ExperiencesLogo/>,
  [ICON_TYPE.PUBLICATIONS]: <PublicationsLogo/>,
  [ICON_TYPE.SKILLS]: <SkillsLogo/>,
}

const MenuItem: React.FC<Props> = ({label}: Props) => {

  const {t} = useContext(LanguageContext);

  const handleClickScroll = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <MenuItemWrapper onClick={() => handleClickScroll(label)}>
      <MenuIcon>{ICON_MAPPING[RESUME_COMPONENT_MAPPING[label].icon]}</MenuIcon>
      <MenuTitle>{t(label)}</MenuTitle>
    </MenuItemWrapper>
  )
}

export default MenuItem;

