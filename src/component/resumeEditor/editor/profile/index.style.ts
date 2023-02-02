import styled from "styled-components";

export const CardHeader = styled.div`

  height: 3rem;
  border-bottom: 1px solid #F0F0F0;;
  padding-left: 1.5rem;
  line-height: 3rem;

  font-family: "Open Sans", serif;
  font-size: 1rem;
  font-weight: bold;

  color: #3D3D3D;
`
export const CardContainer = styled.div`
  padding: 0.75rem 1.5rem 1.0rem 1.5rem;
`

export const CardInnerLine = styled.div`
  margin-bottom: 0.5rem;
  display: flex;

  div {

    margin-right: 3rem;
  }

  div:last-child {
    margin-right: 0;
  }
`
