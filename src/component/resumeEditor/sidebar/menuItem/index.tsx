import React from 'react';
import {MenuTitle, MenuIcon, MenuItemWrapper} from "./index.style";
import {RESUME_COMPONENT_MAPPING} from "../../../../page/ResumeEditor";

interface Props {
  title: string;
}

const MenuItem: React.FC<Props> = ({title}: Props) => {

  const handleClickScroll = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <MenuItemWrapper onClick={() => handleClickScroll(title)}>
      <MenuIcon>{RESUME_COMPONENT_MAPPING[title].icon}</MenuIcon>
      <MenuTitle style={{flex: "1"}}>{title}</MenuTitle>
    </MenuItemWrapper>
  )
}

export default MenuItem;

