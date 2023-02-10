import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {DatePicker, Input, Select} from "antd";
import dayjs, {Dayjs} from "dayjs";

interface Props<T> {
  title: string;
  value?: T;
  placeholder?: string;
  options?: { value: string; label: string }[];
  handleChange: (getValue: (e: any) => T) => (e: any) => void;
}

interface FiledProps {
  label: string;
  value: string;
  type: string;
  options?: any;
  handleChange: (valueOf: (e: any) => any) => (e: any) => void
}

const TextField: React.FC<Props<string>> = ({title, value, placeholder, handleChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input value={value} placeholder={placeholder}
             onChange={handleChange((e) => e.target.value)}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props<string>> = ({title, value, placeholder, handleChange}: Props<string>) => {

  return (
    <FieldWrapper style={{width: "100%"}}>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea placeholder={placeholder} value={value}
                      onChange={handleChange((e) => e.target.value)}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<Props<string>> = ({title, value, options, handleChange}: Props<string>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Select
        value={value}
        options={options ? options : []}
        onChange={handleChange(e => e)}
      />
    </FieldWrapper>
  );
}

const DateField: React.FC<Props<Dayjs>> = ({title, value, handleChange}: Props<Dayjs>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker
        value={value}
        onChange={handleChange((e) => e.toString())}
        placeholder={""}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<Props<[Dayjs, Dayjs]>> = ({title, value, handleChange}: Props<[Dayjs, Dayjs]>) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        value={value}
        onChange={handleChange((e) => e)}
        placeholder={["", ""]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}

export const FIELD_TYPE = {
  TEXT: "text",
  AREA: "area",
  DATE: "date",
  SELECTOR: "selector",
  DATE_RANGE: "dateRange",
}

const Field: React.FC<FiledProps> = ({label, value, type, options, handleChange}) => {

  switch (type) {
    case FIELD_TYPE.TEXT:
      return <TextField title={label} value={value} handleChange={handleChange}/>;
    case FIELD_TYPE.AREA :
      return <TextAreaField title={label} value={value} handleChange={handleChange}/>;
    case FIELD_TYPE.DATE :
      return <DateField title={label} value={value ? dayjs(value) : undefined} handleChange={handleChange}/>;
    case FIELD_TYPE.SELECTOR :
      return <SelectorField title={label} options={options} value={value} handleChange={handleChange}/>;
    case FIELD_TYPE.DATE_RANGE :
      return <DateRangeField title={label} value={value ? [dayjs(value[1]), dayjs(value[1])] : undefined}
                             handleChange={handleChange}/>
    default:
      return <>Error Field</>
  }
}

export default Field;
