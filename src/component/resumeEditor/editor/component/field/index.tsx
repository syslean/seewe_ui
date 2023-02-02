import React from "react";
import {FieldWrapper, FiledTitle, InputWrapper, TextAreaWrapper} from "./index.style";

interface Props {
  title: string;
  value: string;
}


const TextField: React.FC<Props> = ({title, value}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <InputWrapper defaultValue={value}/>
    </FieldWrapper>
  );
}

const TextAreaField: React.FC<Props> = ({title, value}: Props) => {

  return (
    <FieldWrapper>
      <FiledTitle>{title}</FiledTitle>
      <TextAreaWrapper style={{minWidth: "25rem"}}
                      defaultValue={value}/>
    </FieldWrapper>
  );
}

export {TextAreaField, TextField}
