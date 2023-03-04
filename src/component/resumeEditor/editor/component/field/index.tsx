import React, {useEffect, useRef, useState} from "react";
import {DashedTag, FieldWrapper, FiledTitle, StyledTag, TagInput, TagWrapper} from "./index.style";
import {DatePicker, Input, InputRef, Select} from "antd";
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

interface TagFieldProps extends Props<string[]> {
  value: string[];
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
      <Input.TextArea placeholder={placeholder}
                      value={value}
                      autoSize={{minRows: 3}}
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
        value={value ? [dayjs(value[0]), dayjs(value[1])] : undefined}
        onChange={handleChange((e) => e)}
        placeholder={["", ""]}
        format="YYYY / MM"
        picker="month"
      />
    </FieldWrapper>
  );
}

const TagField: React.FC<TagFieldProps> = ({title, value, handleChange,placeholder}: TagFieldProps) => {
  value = value || [];
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    handleChange(() => value.filter((tag) => tag !== removedTag))(null);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && value.indexOf(inputValue) === -1) {
      console.log(inputValue)
      handleChange(() => [...value, inputValue])(null);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...value];
    newTags[editInputIndex] = editInputValue;
    handleChange(() => newTags)(null)
    setEditInputIndex(-1);
    setInputValue('');
  };

  return (
    <FieldWrapper style={{width: "100%"}}>
      <FiledTitle>{title}</FiledTitle>
      <TagWrapper>
        {value?.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <TagInput
                ref={editInputRef}
                key={tag}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          } else {
            return (
              <StyledTag
                key={tag}
                closable={true}
                style={{userSelect: 'none'}}
                onClose={() => handleClose(tag)}
              >
                <span
                  onDoubleClick={(e) => {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }}
                >
                  {tag}
                </span>
              </StyledTag>
            );
          }
        })}
        {inputVisible ? (
          <TagInput
            ref={inputRef}
            type="text"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <DashedTag onClick={showInput} style={{userSelect: 'none'}}>
            <span>{placeholder}</span>
          </DashedTag>
        )}
      </TagWrapper>
    </FieldWrapper>
  );
}

export const FIELD_TYPE = {
  TEXT: "text",
  AREA: "area",
  DATE: "date",
  SELECTOR: "selector",
  DATE_RANGE: "dateRange",
  TAG: "tag"
}

interface FiledProps {
  label: string;
  value: any;
  type: string;
  options?: any;

  placeholder?: string;
  handleChange: (valueOf: (e: any) => any) => (e: any) => void
}

const FILED_MAPPING = {
  [FIELD_TYPE.TEXT]: TextField,
  [FIELD_TYPE.AREA]: TextAreaField,
  [FIELD_TYPE.DATE]: DateField,
  [FIELD_TYPE.SELECTOR]: SelectorField,
  [FIELD_TYPE.DATE_RANGE]: DateRangeField,
  [FIELD_TYPE.TAG]: TagField,
}

const Field: React.FC<FiledProps> = ({label, value, type, options, handleChange, placeholder}) => {
  const C = FILED_MAPPING[type];
  return <C title={label} value={value} handleChange={handleChange} options={options} placeholder={placeholder} />
}

export default Field;
