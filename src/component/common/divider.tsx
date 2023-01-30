import styled from "styled-components";
import {Divider} from "antd";

export const WrappedDivider = styled(Divider)<{ marginVerticalSize: string }>`
  margin: ${({marginVerticalSize}) => marginVerticalSize} 0;
`
