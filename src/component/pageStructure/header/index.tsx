import React from 'react';
import styled from "styled-components";
import {ResumeIcon} from "../../common/icons";
import {Space} from "antd";
import {Title} from "./index.style";


const Header: React.FC<Props> = ({appName}: Props) => {
  return (
    <\>
      <Title>{appName}</Title>
    </>
)
}


interface Props {
  appName: string;
}

export default Header;
