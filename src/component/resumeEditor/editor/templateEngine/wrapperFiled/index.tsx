import React from "react";
import {DateField, DateRangeField, SelectorField, TextAreaField, TextField} from "../../component/field";
import dayjs from "dayjs";

interface Props {
  label: string;
  value: string;
  type: string;
  options?: any;
  handleChange: (valueOf: (e: any) => any) => (e: any) => void
}

export const FIELD_TYPE = {
  TEXT: "text",
  AREA: "area",
  DATE: "date",
  SELECTOR: "selector",
  DATE_RANGE: "dateRange",
}

const BaseField: React.FC<Props> = ({label, value, type, options, handleChange}) => {

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

export default BaseField;
