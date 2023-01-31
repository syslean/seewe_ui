import React from 'react';
import {Col, Row} from "antd";
import SideBar from "../../component/resume/sidebar";
import Editor from "../../component/resume/edictor";
import {ResumeProvider} from "./resumeContext";
import {ShoppingFilled, UserOutlined} from "@ant-design/icons";
import {EducationIcon, PublicationIcon, SkillIcon} from "../../component/common/icons";
import Basics from "../../component/resume/basics";
import Works from "../../component/resume/works";

const Resume: React.FC<Props> = () => {
  const resumeItems = [
    {title: 'Basics', icon: <UserOutlined/>, modal: <Basics/>},
    {title: 'Works', icon: <ShoppingFilled/>, modal: <Works/>},
    {title: 'Skills', icon: <SkillIcon/>, modal: <Basics/>},
    {title: 'Educations', icon: <EducationIcon/>, modal: <Basics/>},
    {title: 'Publications', icon: <PublicationIcon/>, modal: <Basics/>},
  ];

  return (
    <ResumeProvider>
      <Row style={{height: "100%"}}>
        <Col flex="0 0 4.5rem">
          <SideBar items={resumeItems}/>
        </Col>
        <Col flex="2 0">
          <Editor items={resumeItems}/>
        </Col>
        <Col flex="5 0">Resume View</Col>
      </Row>
    </ResumeProvider>
  )
}

export default Resume;

interface Props {

}
