import React from 'react';
import {Avatar, Tooltip} from "antd";

const MenuItem: React.FC<Props> = ({title, icon}: Props) => {
  const handleClickScroll = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <Tooltip title={title} placement="left">
      <Avatar icon={icon} onClick={() => handleClickScroll(title)}/>
    </Tooltip>
  )
}

export default MenuItem;

interface Props {
  title: string;
  icon: React.ReactNode;
}
