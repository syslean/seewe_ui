import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {DatePicker, Input, Select} from "antd";
import dayjs from "dayjs";

interface Props {
  title: string;
  value: string;
}

const TextField: React.FC<Props> = ({title, value}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input defaultValue={value}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props> = ({title, value}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea style={{minWidth: "25rem"}}
                       defaultValue={value}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<Props> = ({title, value}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Select
        defaultValue={value}
        options={[
          {value: 'Associate', label: 'Associate'},
          {value: 'Bachelor', label: 'Bachelor'},
          {value: 'Master', label: 'Master'},
          {value: 'Doctor', label: 'Doctor(PhD)'},
        ]}
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<Props> = ({title}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        defaultValue={[dayjs('2015/06', 'YYYY/MM'), dayjs('2015/06', 'YYYY-MM')]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}


export {TextAreaField, TextField, SelectorField, DateRangeField}
