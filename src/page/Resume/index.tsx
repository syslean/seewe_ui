import React from 'react';
import {Col, Row} from "antd";
import SideBar from "../../component/resume/sidebar";
import Editor from "../../component/resume/edictor";
import {ResumeProvider} from "./ResumeContext";

const Resume: React.FC<Props> = () => {
  return (
    <ResumeProvider>
      <Row>
        <Col span={1}>
          <SideBar/>
        </Col>
        <Col span={5}>
          <Editor/>
        </Col>
        <Col span={18}>Resume View</Col>
      </Row>
    </ResumeProvider>
  )
}

export default Resume;

interface Props {

}
