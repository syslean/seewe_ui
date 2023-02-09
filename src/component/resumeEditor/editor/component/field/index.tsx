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
  // todo: V2 engine use (in the future will instead of onChange)
  handleChange?: (getValue: (e: any) => T) => (e: any) => void;
}

const TextField: React.FC<Props<string>> = ({title, value, placeholder, handleChange, onChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input value={value} placeholder={placeholder}
             onChange={handleChange ? handleChange((e) => e.target.value) : onChange}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props<string>> = ({title, value, placeholder, handleChange, onChange}: Props<string>) => {

  return (
    <FieldWrapper style={{width: "100%"}}>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea placeholder={placeholder} value={value}
                      onChange={handleChange ? handleChange((e) => e.target.value) : onChange}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<Props<string>> = ({title, value, options, handleChange, onChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Select
        value={value}
        options={options ? options : []}
        onChange={handleChange ? handleChange((e) => e.target.value) : onChange}
      />
    </FieldWrapper>
  );
}

const DateField: React.FC<Props<Dayjs>> = ({title, value, handleChange, onChange}: Props<Dayjs>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker
        value={value}
        onChange={handleChange ? handleChange((e) => e.toString()) : onChange}
        placeholder={""}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<Props<[Dayjs, Dayjs]>> = ({title, value, handleChange, onChange}: Props<[Dayjs, Dayjs]>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        value={value}
        onChange={handleChange ? handleChange((e) => e) : onChange}
        placeholder={["", ""]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}


export {TextAreaField, TextField, SelectorField, DateField, DateRangeField}
