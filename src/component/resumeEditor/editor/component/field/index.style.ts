import styled from "styled-components";

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
export const FiledTitle = styled.div`
  margin-bottom: 0.5rem;
  cursor: default;

  font-family: "Open Sans", serif;
  font-size: 0.875rem;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.85);
`
