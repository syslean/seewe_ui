import React from 'react';
import styled from "styled-components";
import {ResumeIcon} from "../common/icons";
import {Space} from "antd";

const Title = styled.div`
  font: normal 1.5rem 'Lucida Grande';
`

const Header: React.FC<Props> = ({appName}: Props) => {
  return (
    <Space size="large" align="center" style={{height: "100%", marginLeft: "1rem"}}>
      <ResumeIcon/>
      <Title>{appName}</Title>
    </Space>
  )
}

export default Header;

interface Props {
  appName: string;
}
