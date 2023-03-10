import styled from "styled-components";
import {Input, Tag} from "antd";

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  // ipad size
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const FieldWrapper = styled.div`
  width: calc(50% - 0.75rem);
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;


  // ipad size
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FieldHeader = styled.div`
  display: flex;
`
export const FiledTitle = styled.div`
  margin-bottom: 0.5rem;
  cursor: default;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.85);
`

export const AIAssist = styled.span`
  height: 1rem;
  font-size: 0.5rem;
  line-height: 1rem;
  background: #000;
  color: #FFF;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
`

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TagInput = styled(Input)`
  width: 80px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const StyledTag = styled(Tag)`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const DashedTag = styled(StyledTag)`
  background: #FFF;
  border-style: dashed;
`
