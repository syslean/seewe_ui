import React from "react";
import {FieldWrapper, FiledTitle} from "./index.style";
import {Input} from "antd";

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
      <Input.TextArea style={{maxWidth: "25rem"}}
                      defaultValue={value}/>
    </FieldWrapper>
  );
}

export {TextAreaField, TextField}
