import React, {ChangeEvent, Dispatch, useState} from 'react';
import {Col, DatePicker, Input, Modal, Row} from 'antd';
import Label from "../label";
import styled from "styled-components";
import dayjs, {Dayjs} from "dayjs";


const WrappedRow = styled(Row)`
  margin-bottom: 1rem;
`

const WorkForm: React.FC<Props> = ({workExperience, handleSave, isOpen, setIsOpen}: Props) => {


  const [workInfo, setWorkInfo] = useState(workExperience);

  const {name, position, startDate, endDate, summary} = workInfo;

  const handleCancel = () => {
    setIsOpen(false);
  }

  const handleOk = () => {
    handleSave(workInfo);
  }


  const setName = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkInfo({...workInfo, name: event.target.value})
  }

  const setPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkInfo({...workInfo, position: event.target.value})
  }

  const setSummary = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setWorkInfo({...workInfo, summary: event.target.value})
  }

  const setStartDate = (dates: Dayjs | null, startDate: string) => {
    setWorkInfo({...workInfo, startDate})
  }

  const setEndDate = (dates: Dayjs | null, endDate: string) => {
    setWorkInfo({...workInfo, endDate})
  }

  return (
    <>
      <Modal title="Edit Work Experience" open={isOpen} onOk={handleOk} onCancel={handleCancel}
             style={{minWidth: "45rem"}}>
        <WrappedRow style={{marginTop: "2rem"}}>
          <Col span={3}>
            <Label name="name"/>
          </Col>
          <Col span={9}>
            <Input value={name} onChange={setName}/>
          </Col>
          <Col span={3}>
            <Label name="position"/>
          </Col>
          <Col span={9}>
            <Input value={position} onChange={setPosition}/>
          </Col>
        </WrappedRow>
        <WrappedRow>
          <Col span={3}>
            <Label name="startDate"/>
          </Col>
          <Col span={9}>
            <DatePicker size="middle" value={dayjs(startDate, "YYYY/MM/DD")} style={{width: "100%"}} format="YYYY/MM/DD"
                        onChange={setStartDate}/>
          </Col>
          <Col span={3}>
            <Label name="endDate"/>
          </Col>
          <Col span={9}>
            <DatePicker size="middle" value={dayjs(endDate, "YYYY/MM/DD")} style={{width: "100%"}} format="YYYY/MM/DD"
                        onChange={setEndDate}/>
          </Col>
        </WrappedRow>
        <WrappedRow>
          <Col span={24}>
            <Label name="Summary"/>
          </Col>
        </WrappedRow>
        <WrappedRow>
          <Col span={24}>
            <Input.TextArea autoSize value={summary} onChange={setSummary}/>
          </Col>
        </WrappedRow>
      </Modal>
    </>
  )

}


interface Props {
  isOpen: boolean,
  setIsOpen: Dispatch<boolean>,
  workExperience: WorkExperienceModal,
  handleSave: (workExperience: WorkExperienceModal) => void
}

export default WorkForm;
