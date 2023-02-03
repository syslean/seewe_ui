import React from 'react';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import {TwoFieldsLayout} from "../component/field/index.style";
import Action from "../component/action";
import { AddIcon, CloseIcon, DeleteIcon } from '../component/action/index.style';


const Educations: React.FC = () => {

  const actions = [
    <Action icon={<AddIcon/>} onClick={() => {
      alert("AddIcon")
    }}/>,
    <Action icon={<CloseIcon/>} onClick={() => {
      alert("CloseIcon")
    }}/>,
  ];

  const subActions = [
    <Action icon={<DeleteIcon/>} onClick={() => {
      alert("DeleteIcon")
    }}/>,
  ]

  return (
    <Card title={RESUME_COMPONENT_NAME.EDUCATIONS} actions={actions}>
      <SubCard actions={subActions}>
        <TwoFieldsLayout>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </TwoFieldsLayout>
      </SubCard>
      <SubCard actions={subActions}>
        <TwoFieldsLayout>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </TwoFieldsLayout>
      </SubCard>
    </Card>
  )
}

export default Educations;

