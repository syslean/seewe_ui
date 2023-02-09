import React, {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import Card from "../component/card";
import {template} from "./template";
import BaseField from "./wrapperFiled";

const TemplateEngine: React.FC = () => {
  const {t} = useContext(LanguageContext);
  const module = template.modules[0];
  const [store, setStore] = useLocalStorage<any>(module.storeKey, {} as any);

  const handleChangeValue = (key: string) => (valueOf: (e: any) => any) => (e: any) => {
    setStore({...store, [key]: valueOf(e)})
  };

  return (
    <Card title={t(module.label)}>
      {module.fields.map(
        ({label, value, type, options}, index) =>
          <BaseField key={index} label={t(label)} value={store[value]} type={type} options={options}
                     handleChange={handleChangeValue(value)}/>)
      }
    </Card>
  )
}

export default TemplateEngine;
