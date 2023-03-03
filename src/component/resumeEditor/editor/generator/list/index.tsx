import React, {useContext} from "react";
import useLocalStorage from "../../../../../hook/useLocalStorage";
import {LanguageContext} from "../../../../../context/LanguageContext";
import {AddIcon, CloseIcon, DeleteIcon} from "../../component/action/index.style";
import Card from "../../component/card";
import Hint from "../../component/card/hint";
import SubCard from "../../component/subCard";
import Field from "../../component/field";
import {Form} from "../../component/field/index.style";
import {GeneratorProps} from "../index";
import {Option} from "../config";

const ListGenerator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const {t} = useContext(LanguageContext);

  const [store, setStore] = useLocalStorage(module.storeKey, [] as Array<any>);

  const translateOptions = (options: Option[]) => {
    return options.map((item) => ({...item, label: t(item.label)}));
  }

  const handleChangeValueWithIndex = (key: string, index: number) => (valueOf: (e: any) => any) => (e: any) => {
    setStore(store.map((item: any, i: number) => (index === i) ? {...item, [key]: valueOf(e)} : item))
  };

  const handleAddAction = () => {
    store.unshift({})
    setStore([...store]);
  }

  const handleCloseAction = () => {
    alert('//todo close')
  }

  const handleDeleteAction = (index: number) => () => {
    store.splice(index, 1);
    setStore([...store]);
  }

  const actions = [
    {icon: <AddIcon/>, onClick: handleAddAction},
    {icon: <CloseIcon/>, onClick: handleCloseAction}
  ];

  const generateSubActions = (key: number) => [{icon: <DeleteIcon/>, onClick: handleDeleteAction(key)}]

  return (
    <Card title={t(module.label)} actions={actions}>
      {store.length === 0 && (<Hint value={t(module.hint)}/>)}
      {
        store.map((item: any, index: number) => (
          <SubCard key={index} actions={generateSubActions(index)}>
            <Form>
              {module.fields.map(
                ({label, value, type, options}, subIndex) =>
                  <Field key={subIndex} label={t(label)} value={item[value]} type={type}
                         options={options ? translateOptions(options) : options}
                         handleChange={handleChangeValueWithIndex(value, index)}/>
              )}
            </Form>
          </SubCard>
        ))
      }
    </Card>
  )
}

export default ListGenerator;
