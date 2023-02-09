import React, {useContext} from 'react';
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, TextAreaField, TextField} from "../component/field";
import {Inline} from "../component/field/index.style";
import {AddIcon, CloseIcon, DeleteIcon} from '../component/action/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import dayjs from "dayjs";
import {ResumeKey} from "../../../../constants/enums";
import Hint from "../component/card/hint";


const EXPERIENCES_PREFIX = "editor.experiences"

const EXPERIENCES_LABEL = {
  KEY: `${EXPERIENCES_PREFIX}.key`,
  NAME: `${EXPERIENCES_PREFIX}.name`,
  POSITION: `${EXPERIENCES_PREFIX}.position`,
  PERIOD: `${EXPERIENCES_PREFIX}.period`,
  SUMMARY: `${EXPERIENCES_PREFIX}.summary`,
}

const NO_EXPERIENCE_HINT = "hint.noExperience"

const Experiences: React.FC = () => {

  const {t} = useContext(LanguageContext);

  const [experiences, setExperiences] = useLocalStorage<ExperienceModal[]>(ResumeKey.experiences, []);

  const handleChangeValue = (key: string, index: number) => (action: any) => {
    setExperiences(experiences.map((item, i) => (index === i) ? {
      ...item,
      [key]: action?.target?.value ?? action.toString()
    } : item))
  };

  const handleAddAction = () => {
    experiences.unshift({} as ExperienceModal)
    setExperiences([...experiences]);
  }

  const handleDeleteAction = (index: number) => () => {
    experiences.splice(index, 1);
    setExperiences([...experiences]);
  }


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
    <Card title={t(EXPERIENCES_LABEL.KEY)} actions={actions}>
      {experiences.length === 0 && (<Hint value={t(NO_EXPERIENCE_HINT)}/>)}
      {
        experiences.map((item, index) => (
          <SubCard actions={generateSubActions(index)} key={index}>
            <Inline>
              <TextField title={t(EXPERIENCES_LABEL.NAME)} value={item.name}
                         onChange={handleChangeValue("name", index)}/>
              <TextField title={t(EXPERIENCES_LABEL.POSITION)} value={item.position}
                         onChange={handleChangeValue("position", index)}/>
            </Inline>
            <Inline>
              <DateRangeField title={t(EXPERIENCES_LABEL.PERIOD)}
                              value={item.period ? [dayjs(item.period[0]), dayjs(item.period[1])] : undefined}
                              onChange={handleChangeValue("period", index)}/>
            </Inline>
            <Inline>
              <TextAreaField title={t(EXPERIENCES_LABEL.SUMMARY)} value={item.summary}
                             onChange={handleChangeValue("summary", index)}/>
            </Inline>
          </SubCard>
        ))
      }
    </Card>
  )
}

export default Experiences;

