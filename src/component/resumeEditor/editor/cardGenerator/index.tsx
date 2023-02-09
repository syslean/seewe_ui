import React, {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import Card from "../component/card";
import {template} from "./template";
import BaseField from "./baseField";
import {AddIcon, CloseIcon, DeleteIcon} from "../component/action/index.style";
import SubCard from "../component/subCard";
import {Module} from "../component/field/index.style";

const CardGenerator: React.FC = () => {
  const {t} = useContext(LanguageContext);

  const module = template.modules[0];
  const [store, setStore] = useLocalStorage<any>(module.storeKey, {} as any);

  const handleChangeValue = (key: string) => (valueOf: (e: any) => any) => (e: any) => {
    setStore({...store, [key]: valueOf(e)})
  };

  const translateOptions = (options: { label: string, value: string }[] | undefined) => {
    return options ?
      options.map((item) => ({...item, label: t(item.label)})) : undefined
  }

  return (
    <Card title={t(module.label)}>
      <Module>
        {module.fields.map(
          ({label, value, type, options}, index) =>
            <BaseField key={index} label={t(label)} value={store[value]} type={type}
                       options={translateOptions(options)}
                       handleChange={handleChangeValue(value)}/>
        )
        }
      </Module>

    </Card>
  )
}


const ListCardGenerator: React.FC = () => {
  const {t} = useContext(LanguageContext);

  const module = template.modules[1];
  const [store, setStore] = useLocalStorage<Array<any>>(module.storeKey, []);

  const translateOptions = (options: { label: string, value: string }[] | undefined) => {
    return options ?
      options.map((item) => ({...item, label: t(item.label)})) : undefined
  }

  const handleChangeValueWithIndex = (key: string, index: number) => (valueOf: (e: any) => any) => (e: any) => {
    setStore(store.map((item: any, i: number) => (index === i) ?
      {...item, [key]: valueOf(e)} : item))
  };

  const handleAddAction = () => {
    store.unshift({})
    setStore([...store]);
  }

  const handleDeleteAction = (index: number) => () => {
    store.splice(index, 1);
    setStore([...store]);
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
    <Card title={t(module.label)} actions={actions}>
      {
        store.map((item: any, index: number) => (
          <SubCard actions={generateSubActions(index)} key={index}>
            <Module>
              {module.fields.map(
                ({label, value, type, options}, subIndex) =>
                  <BaseField key={subIndex} label={t(label)} value={item[value]} type={type}
                             options={translateOptions(options)}
                             handleChange={handleChangeValueWithIndex(value, index)}/>
              )
              }
            </Module>
          </SubCard>
        ))
      }
    </Card>
  )
}

export {CardGenerator, ListCardGenerator};
