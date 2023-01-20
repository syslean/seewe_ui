import React from 'react';
import SideBar from "../component/sidebar";
import {Col, Row} from "antd";

const Resume: React.FC<Props> = () => {
  return (
    <Row>
      <Col span={1}>
        <SideBar/>
      </Col>
      <Col span={9}>Editor</Col>
      <Col >Resume</Col>
    </Row>
  )
}

export default Resume;

interface Props {

}
