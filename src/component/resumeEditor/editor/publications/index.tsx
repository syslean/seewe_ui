import React, {useContext} from 'react';
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateField, TextField} from "../component/field";
import {Inline} from "../component/field/index.style";
import {AddIcon, CloseIcon, DeleteIcon} from '../component/action/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import dayjs from "dayjs";
import {ResumeKey} from "../../../../constants/enums";
import Hint from "../component/card/hint";


const PUBLICATIONS_PREFIX = "editor.publications"

const PUBLICATIONS_LABEL = {
  KEY: `${PUBLICATIONS_PREFIX}.key`,
  NAME: `${PUBLICATIONS_PREFIX}.name`,
  PUBLISHED_AT: `${PUBLICATIONS_PREFIX}.publishedAt`,
}

const NO_PUBLICATION_HINT = "hint.noPublication"

const Publications: React.FC = () => {

  const {t} = useContext(LanguageContext);

  const [publications, setPublications] = useLocalStorage<PublicationModal[]>(ResumeKey.publications, []);

  const handleChangeValue = (key: string, index: number) => (action: any) => {
    setPublications(publications.map((item, i) => (index === i) ? {
      ...item,
      [key]: (action instanceof Array) ? action : action?.target?.value ?? action.toString()
    } : item))
  };

  const handleAddAction = () => {
    publications.unshift({} as PublicationModal)
    setPublications([...publications]);
  }

  const handleDeleteAction = (index: number) => () => {
    publications.splice(index, 1);
    setPublications([...publications]);
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
    <Card title={t(PUBLICATIONS_LABEL.KEY)} actions={actions}>
      {publications.length === 0 && (<Hint value={t(NO_PUBLICATION_HINT)}/>)}
      {
        publications.map((item, index) => (
          <SubCard actions={generateSubActions(index)} key={index}>
            <Inline>
              <TextField title={t(PUBLICATIONS_LABEL.NAME)} value={item.name}
                         onChange={handleChangeValue("name", index)}/>
              <DateField title={t(PUBLICATIONS_LABEL.PUBLISHED_AT)}
                         value={item.publishedAt ? dayjs(item.publishedAt) : undefined}
                         onChange={handleChangeValue("publishedAt", index)}/>
            </Inline>
          </SubCard>
        ))
      }
    </Card>
  )
}

export default Publications;
