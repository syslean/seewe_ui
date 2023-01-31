import React, {ChangeEvent, useContext} from 'react';
import {Card, Col, Input, Row} from "antd";
import {ResumeContext} from "../../../page/Resume/resumeContext";
import Header from "../header";
import Label from "../label";

const Basics: React.FC = () => {
  const {resume, setBasicInfo} = useContext(ResumeContext);
  const {basicInfo} = resume;

  const setFullName = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setBasicInfo({...basicInfo, fullName: event.target.value})
  }

  return (
    <Card>
      <Header title="Basics" description="Record basic information"/>
      <Row>
        <Col span={6}>
          <Label name="FullName"/>
        </Col>
        <Col span={18}>
          <Input value={basicInfo.fullName} onChange={setFullName}/>
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
    </Card>
  )
}

export default Basics;

