import React, {useContext} from 'react';
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import {TwoFieldsLayout} from "../component/field/index.style";
import Action from "../component/action";
import {AddIcon, CloseIcon, DeleteIcon} from '../component/action/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";


const EDUCATIONS_PREFIX = "editor.educations"

const EDUCATIONS_LABEL = {
  KEY: `${EDUCATIONS_PREFIX}.key`,
  SCHOOL: `${EDUCATIONS_PREFIX}.school`,
  MAJOR: `${EDUCATIONS_PREFIX}.major`,
  DEGREE: `${EDUCATIONS_PREFIX}.degree`,
  PERIOD: `${EDUCATIONS_PREFIX}.period`,
  DEGREE_TYPE: {
    ASSOCIATE: `${EDUCATIONS_PREFIX}.degreeType.associate`,
    BACHELOR: `${EDUCATIONS_PREFIX}.degreeType.bachelor`,
    MASTER: `${EDUCATIONS_PREFIX}.degreeType.master`,
    DOCTOR: `${EDUCATIONS_PREFIX}.degreeType.doctor`
  }
}

const Educations: React.FC = () => {

  const {t} = useContext(LanguageContext);

  const DEGREE_TYPE_OPTIONS = [
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.ASSOCIATE)}`, value: "associate"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.BACHELOR)}`, value: "bachelor"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.MASTER)}`, value: "master"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.DOCTOR)}`, value: "doctor"}
  ]

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
    <Card title={t(EDUCATIONS_LABEL.KEY)} actions={actions}>
      <SubCard actions={subActions}>
        <TwoFieldsLayout>
          <TextField title={t(EDUCATIONS_LABEL.SCHOOL)} value="Happy University"/>
          <TextField title={t(EDUCATIONS_LABEL.MAJOR)} value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title={t(EDUCATIONS_LABEL.DEGREE)} value="" options={DEGREE_TYPE_OPTIONS}/>
          <DateRangeField title={t(EDUCATIONS_LABEL.PERIOD)} value=""/>
        </TwoFieldsLayout>
      </SubCard>
      <SubCard actions={subActions}>
        <TwoFieldsLayout>
          <TextField title={t(EDUCATIONS_LABEL.SCHOOL)} value="Happy University"/>
          <TextField title={t(EDUCATIONS_LABEL.MAJOR)} value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title={t(EDUCATIONS_LABEL.DEGREE)} value="" options={DEGREE_TYPE_OPTIONS}/>
          <DateRangeField title={t(EDUCATIONS_LABEL.PERIOD)} value=""/>
        </TwoFieldsLayout>
      </SubCard>
    </Card>
  )
}

export default Educations;

