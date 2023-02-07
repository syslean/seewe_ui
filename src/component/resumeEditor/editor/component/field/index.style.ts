import styled from "styled-components";

export const Inline = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  // ipad size
  @media (max-width: 52rem) {
    margin-bottom: 0;
  }
`

export const FieldWrapper = styled.div`
  width: calc(50% - 0.75rem);
  display: flex;
  flex-direction: column;

  // ipad size
  @media (max-width: 52rem) {
    width: 100%;
    margin-bottom: 0.5rem;
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
