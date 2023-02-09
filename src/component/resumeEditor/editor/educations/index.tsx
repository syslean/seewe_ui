import React, {useContext} from 'react';
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import {Inline} from "../component/field/index.style";
import {AddIcon, CloseIcon, DeleteIcon} from '../component/action/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import dayjs from "dayjs";
import {ResumeKey} from "../../../../constants/enums";
import Hint from "../component/card/hint";


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

const NO_EDUCATION_HINT = "hint.noEducation"

const Educations: React.FC = () => {

  const {t} = useContext(LanguageContext);

  const [educations, setEducations] = useLocalStorage<EducationModal[]>(ResumeKey.educations, []);

  const handleChangeValue = (key: string, index: number) => (action: any) => {
    setEducations(educations.map((item, i) => (index === i) ? {
      ...item,
      [key]: (action instanceof Array) ? action : action?.target?.value ?? action.toString()
    } : item))
  };

  const handleAddAction = () => {
    educations.unshift({} as EducationModal)
    setEducations([...educations]);
  }

  const handleDeleteAction = (index: number) => () => {
    educations.splice(index, 1);
    setEducations([...educations]);
  }

  const DEGREE_TYPE_OPTIONS = [
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.ASSOCIATE)}`, value: "associate"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.BACHELOR)}`, value: "bachelor"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.MASTER)}`, value: "master"},
    {label: `${t(EDUCATIONS_LABEL.DEGREE_TYPE.DOCTOR)}`, value: "doctor"}
  ]

  const actions = [
    {icon: <AddIcon/>, onClick: handleAddAction},
    {
      icon: <CloseIcon/>, onClick: () => {
        alert("todo close~")
      }
    },
  ];

  const generateSubActions = (key: number) => [{icon: <DeleteIcon/>, onClick: handleDeleteAction(key)}]

  return (
    <Card title={t(EDUCATIONS_LABEL.KEY)} actions={actions}>
      {educations.length === 0 && (<Hint value={t(NO_EDUCATION_HINT)}/>)}
      {
        educations.map((item, index) => (
          <SubCard actions={generateSubActions(index)} key={index}>
            <Inline>
              <TextField title={t(EDUCATIONS_LABEL.SCHOOL)} value={item.school}
                         onChange={handleChangeValue("school", index)}/>
              <TextField title={t(EDUCATIONS_LABEL.MAJOR)} value={item.major}
                         onChange={handleChangeValue("major", index)}/>
            </Inline>
            <Inline>
              <SelectorField title={t(EDUCATIONS_LABEL.DEGREE)} options={DEGREE_TYPE_OPTIONS}
                             value={item.degree}
                             onChange={handleChangeValue("degree", index)}/>
              <DateRangeField title={t(EDUCATIONS_LABEL.PERIOD)}
                              value={item.period ? [dayjs(item.period[0]), dayjs(item.period[1])] : undefined}
                              onChange={handleChangeValue("period", index)}/>
            </Inline>
          </SubCard>
        ))
      }
    </Card>
  )
}

export default Educations;

