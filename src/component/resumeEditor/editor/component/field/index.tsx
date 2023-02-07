import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {DatePicker, Input, Select} from "antd";
import {Dayjs} from "dayjs";

interface Props<T> {
  title: string;
  value?: T;
  placeholder?: string;
  options?: { value: string; label: string }[];
  // eslint-disable-next-line
  onChange?: any;
}

const TextField: React.FC<Props<string>> = ({title, value, placeholder, onChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input value={value} placeholder={placeholder} onChange={onChange}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props<string>> = ({title, value, placeholder, onChange}: Props<string>) => {

  return (
    <FieldWrapper style={{width: "100%"}}>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea placeholder={placeholder} value={value} onChange={onChange}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<Props<string>> = ({title, value, options, onChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Select
        value={value}
        options={options ? options : []}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<Props<[Dayjs, Dayjs]>> = ({title, value, onChange}: Props<[Dayjs, Dayjs]>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        value={value}
        onChange={onChange}
        placeholder={["", ""]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}


export {TextAreaField, TextField, SelectorField, DateRangeField}
