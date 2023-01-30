import React from 'react';
import {Avatar, Tooltip} from "antd";

const MenuItem: React.FC<Props> = ({title, icon}: Props) => {

  return (
    <Tooltip title={title} placement="left">
      <a href={`#${title}`}>
        <Avatar icon={icon}/>
      </a>
    </Tooltip>
  )
}

export default MenuItem;

interface Props {
  title: string;
  icon: React.ReactNode;
}
