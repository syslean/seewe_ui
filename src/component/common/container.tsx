import styled from "styled-components";

export const WrappedContainer = styled.div<{ containerHeight: string }>`
  height: ${({containerHeight}) => containerHeight};
`
