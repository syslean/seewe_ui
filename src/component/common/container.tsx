import styled from "styled-components";

interface Props {
  height?: string;
  width?: string;
  backgroundColor?: string
}

export const WrappedContainer = styled.div<Props>`
  min-width: ${({width}) => width ?? ""};
  height: ${({height}) => height ?? ""};
  background-color: ${({backgroundColor}) => backgroundColor ?? "white"};
`
