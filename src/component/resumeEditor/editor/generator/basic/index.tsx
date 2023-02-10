import React, {useContext} from "react";
import {LanguageContext} from "../../../../../context/LanguageContext";
import useLocalStorage from "../../../../../service/useLocalStorage";
import Card from "../../component/card";
import {Form} from "../../component/field/index.style";
import Field from "../../component/field";
import {GeneratorProps} from "../index";

const BasicGenerator: React.FC<GeneratorProps> = ({module}: GeneratorProps) => {
  const {t} = useContext(LanguageContext);

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
      <Form>
        {module.fields.map(
          ({label, value, type, options}, index) =>
            <Field key={index} label={t(label)} value={store[value]} type={type}
                   options={translateOptions(options)}
                   handleChange={handleChangeValue(value)}/>
        )
        }
      </Form>
    </Card>
  )
}

export default BasicGenerator;
