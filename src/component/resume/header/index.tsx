import React from 'react';
import {UserOutlined} from "@ant-design/icons";
import styled from "styled-components";

const Content = styled.div`
  span{
    margin: 0.25rem 0.5rem;
    font:  1.5rem 'Lucida Grande';
  }
`

const Header: React.FC<Props> = ({title}: Props) => {
  return (
    <Content>
      <UserOutlined style={{fontSize: "2em", lineHeight: "2rem"}}/>
      <span>{title}</span>
    </Content>
  )
}

export default Header;

interface Props {
  title: string;
}
