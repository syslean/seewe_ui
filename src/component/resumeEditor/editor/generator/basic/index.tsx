import React, {useContext} from "react";
import {LanguageContext} from "../../../../../context/LanguageContext";
import useLocalStorage from "../../../../../hook/useLocalStorage";
import Card from "../../component/card";
import {Form} from "../../component/field/index.style";
import Field from "../../component/field";
import {GeneratorProps} from "../index";
import {Option} from "../config";

const BasicGenerator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const {t} = useContext(LanguageContext);

  const [store, setStore] = useLocalStorage(module.storeKey, {} as any);

  const handleChangeValue = (key: string) => (valueOf: (e: any) => any) => (e: any) => {
    setStore({...store, [key]: valueOf(e)})
  };

  const translateOptions = (options: Option[]) => {
    return options.map((item) => ({...item, label: t(item.label)}))
  }

  return (
    <Card title={t(module.label)}>
      <Form>
        {module.fields.map(
          ({label, value, type, options, enableAI}, index) =>
            <Field key={index} label={t(label)} value={store[value]} type={type} enableAI={enableAI}
                   options={options ? translateOptions(options) : undefined}
                   handleChange={handleChangeValue(value)}/>
        )}
      </Form>
    </Card>
  )
}

export default BasicGenerator;
