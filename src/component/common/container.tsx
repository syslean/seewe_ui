import styled from "styled-components";

export const WrappedContainer = styled.div<{ containerHeight?: string, backgroundColor?: string }>`
  height: ${({containerHeight}) => containerHeight?? ""};
  background-color: ${({backgroundColor}) => backgroundColor ?? "white" };
`
