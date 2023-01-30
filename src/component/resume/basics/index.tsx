import React, {useContext} from 'react';
import {Col, Input, Row} from "antd";
import {ResumeContext} from "../../../page/Resume/ResumeContext";
import Header from "../header";
import Label from "../label";

const Basics: React.FC = () => {
  const {basicInfo} = useContext(ResumeContext);

  return (
    <>
      <Header title="Basics"/>
      <Row>
        <Col span={6}>
          <Label name="FullName"/>
        </Col>
        <Col span={18}>
          <Input defaultValue={basicInfo.fullName}/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Label name="Summary"/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input.TextArea autoSize defaultValue={basicInfo.summary}/>
        </Col>
      </Row>
    </>
  )
}

export default Basics;

