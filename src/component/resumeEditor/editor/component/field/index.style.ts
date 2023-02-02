import styled from "styled-components";
import {Input} from "antd";

export const FieldWrapper = styled.div`
  width: calc(50% - 0.75rem);
  display: flex;
  flex-direction: column;
`
export const FiledTitle = styled.div`
  margin-bottom: 0.5rem;

  font-family: "Open Sans", serif;
  font-size: 0.875rem;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.85);
`

export const InputWrapper = styled(Input)`
  font-family: "Open Sans", serif;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 22px;

  color: rgba(0, 0, 0, 0.65);
`

export const TextAreaWrapper = styled(Input.TextArea)`
  font-family: "Open Sans", serif;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 22px;

  color: rgba(0, 0, 0, 0.65);
`
