import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {DatePicker, Input, Select} from "antd";

interface Props {
  title: string;
  value?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const TextField: React.FC<Props> = ({title, value, placeholder}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input value={value} placeholder={placeholder}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props> = ({title, value, placeholder}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea style={{minWidth: "25rem"}}
                      placeholder={placeholder}
                      value={value}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<Props> = ({title, options}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Select
        options={options ? options : []}
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<Props> = ({title}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        placeholder={["", ""]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}


export {TextAreaField, TextField, SelectorField, DateRangeField}
