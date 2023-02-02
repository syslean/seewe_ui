import React from 'react';
import {MenuItemWrapper} from "./index.style";

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
    <MenuItemWrapper>
      <span onClick={() => handleClickScroll(title)}>{title}</span>
    </MenuItemWrapper>
  )
}

export default MenuItem;

