import React, {ChangeEvent, useContext} from 'react';
import {Card, Col, Input, Row} from "antd";
import {ResumeContext} from "../../../page/Resume/resumeContext";
import Header from "../header";
import Label from "../label";

const Basics: React.FC = () => {
  const {resume, setBasicInfo} = useContext(ResumeContext);
  const {basicInfo} = resume;

  const setFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setBasicInfo({...basicInfo, fullName: event.target.value})
  }

  const setSummary = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBasicInfo({...basicInfo, summary: event.target.value})
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
          <Input.TextArea autoSize value={basicInfo.summary} onChange={setSummary}/>
        </Col>
      </Row>
    </Card>
  )
}

export default Basics;

