import React from 'react';
import {Col, Row} from "antd";
import SideBar from "../../component/resume/sidebar";
import Editor from "../../component/resume/edictor";
import {ResumeProvider} from "./ResumeContext";

const Resume: React.FC<Props> = () => {
  return (
    <ResumeProvider>
      <Row>
        <Col flex="0 0 4.5rem">
          <SideBar/>
        </Col>
        <Col flex={4}>
          <Editor/>
        </Col>
        <Col flex={20}>Resume View</Col>
      </Row>
    </ResumeProvider>
  )
}

export default Resume;

interface Props {

}
