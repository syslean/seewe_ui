import React, {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import Card from "../component/card";
import {Inline} from "../component/field/index.style";
import {DateField, DateRangeField, TextAreaField, TextField} from "../component/field";
import {template} from "./template";
import dayjs from "dayjs";

const TemplateEngine: React.FC = () => {
  const {t} = useContext(LanguageContext);
  const module = template.modules[0];
  const [store, setStore] = useLocalStorage<any>(module.storeKey, {} as any);

  const handleChangeValue = (key: string) => (e: any) => {
    if (e instanceof Array) {
      setStore({...store, [key]: e})
    } else {
      setStore({...store, [key]: e?.target?.value ?? e.toString()})
    }
  };

  return (
    <Card title={t(module.label)}>
      {
        module.fields.map(({label, value, type}, index) => {
          let field;
          if (type === "text") {
            field = (
              <TextField title={t(label)} value={store[value]} onChange={handleChangeValue(value)}/>)
          } else if (type === "area") {
            field = (
              <TextAreaField title={t(label)} value={store[value]} onChange={handleChangeValue(value)}/>
            )
          } else if (type === "date") {
            field = (
              <DateField title={t(label)}
                         value={store[value] ? dayjs(store[value]) : undefined}
                         onChange={handleChangeValue(value)}/>
            )
          } else if (type === "selector") {
            // field = (<>dataRange</>)
          } else if (type === "dataRange") {

            field = (
              <DateRangeField title={t(label)}
                              value={store[value] ? [dayjs(store[value][1]), dayjs(store[value][1])] : undefined}
                              onChange={handleChangeValue(value)}/>
            )
          } else {
            field = (<>Error Field</>)
          }
          return (
            <Inline key={index}>
              {field}
            </Inline>
          )
        })
      }
    </Card>
  )
}

export default TemplateEngine;
