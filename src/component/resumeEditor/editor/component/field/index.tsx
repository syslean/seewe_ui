import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {DatePicker, Input, Select} from "antd";
import dayjs, {Dayjs} from "dayjs";

interface Props<V> {
  title: string;
  value: unknown;
  placeholder?: string;
  options?: { value: string; label: string }[];
  handleChange: (valueOf: (e: any) => V) => (e: any) => void;
}

interface TextFieldProps extends Props<string> {
  value: string;
}

interface DateFieldProps extends Props<Dayjs> {
  value: string;
}

interface DateRangeFieldProps extends Props<[Dayjs, Dayjs]> {
  value: [string, string];
}

const TextField: React.FC<TextFieldProps> = ({title, value, placeholder, handleChange}: TextFieldProps) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <Input value={value} placeholder={placeholder}
             onChange={handleChange((e) => e.target.value)}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<TextFieldProps> = ({title, value, placeholder, handleChange}: TextFieldProps) => {

  return (
    <FieldWrapper style={{width: "100%"}}>
      <FiledTitle>{title}</FiledTitle>
      <Input.TextArea placeholder={placeholder} value={value}
                      onChange={handleChange((e) => e.target.value)}/>
    </FieldWrapper>
  );
}

const SelectorField: React.FC<TextFieldProps> = ({title, value, options, handleChange}: TextFieldProps) => {

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

const DateField: React.FC<DateFieldProps> = ({title, value, handleChange}: DateFieldProps) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.MonthPicker
        value={value ? dayjs(value) : undefined}
        onChange={handleChange((e) => e.toString())}
        placeholder={""}
        format="YYYY / MM"
      />
    </FieldWrapper>
  );
}

const DateRangeField: React.FC<DateRangeFieldProps> = ({title, value, handleChange}: DateRangeFieldProps) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <DatePicker.RangePicker
        value={value ? [dayjs(value[1]), dayjs(value[1])] : undefined}
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

interface FiledProps {
  label: string;
  value: any;
  type: string;
  options?: any;
  handleChange: (valueOf: (e: any) => any) => (e: any) => void
}

const FILED_MAPPING = {
  [FIELD_TYPE.TEXT]: TextField,
  [FIELD_TYPE.AREA]: TextAreaField,
  [FIELD_TYPE.DATE]: DateField,
  [FIELD_TYPE.SELECTOR]: SelectorField,
  [FIELD_TYPE.DATE_RANGE]: DateRangeField,
}

const Field: React.FC<FiledProps> = ({label, value, type, options, handleChange}) => {
  const C = FILED_MAPPING[type];
  return <C title={label} value={value} handleChange={handleChange} options={options}/>
}

export default Field;
