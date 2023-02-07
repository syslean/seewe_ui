import React, {ChangeEvent, useContext} from 'react';
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import {TwoFieldsLayout} from "../component/field/index.style";
import Action from "../component/action";
import {AddIcon, CloseIcon, DeleteIcon} from '../component/action/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import dayjs from "dayjs";
import {ResumeKey} from "../../../../constants/enums";


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

  const [educations, setEducations] = useLocalStorage<EducationModal[]>(ResumeKey.educations, []);

  const handleChangeValue = (key: string, index: number) => (action: ChangeEvent<HTMLInputElement> | string | [string, string]) => {
    if (action instanceof Array || typeof action === "string") {
      setEducations(educations.map((item, i) => (index === i) ? {...item, [key]: action} : item))
    } else {
      setEducations(educations.map((item, i) => (index === i) ? {...item, [key]: action.target.value} : item))
    }
  };

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
      {
        educations.map((item, index) => (
          <SubCard actions={subActions} key={index}>
            <TwoFieldsLayout>
              <TextField title={t(EDUCATIONS_LABEL.SCHOOL)} placeholder="Happy University"
                         value={item.school}
                         onChange={handleChangeValue("school", index)}/>
              <TextField title={t(EDUCATIONS_LABEL.MAJOR)} placeholder="Experience design"
                         value={item.major}
                         onChange={handleChangeValue("major", index)}/>
            </TwoFieldsLayout>
            <TwoFieldsLayout>
              <SelectorField title={t(EDUCATIONS_LABEL.DEGREE)} options={DEGREE_TYPE_OPTIONS}
                             value={item.degree}
                             onChange={handleChangeValue("degree", index)}/>
              <DateRangeField title={t(EDUCATIONS_LABEL.PERIOD)}
                              value={[dayjs(item.period[0]), dayjs(item.period[1])]}
                              onChange={handleChangeValue("period", index)}/>
            </TwoFieldsLayout>
          </SubCard>
        ))
      }
    </Card>
  )
}

export default Educations;

