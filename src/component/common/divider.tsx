import styled from "styled-components";
import {Divider} from "antd";

export const WrappedDivider = styled(Divider)<{ marginverticalsize: string }>`
   margin-top: ${({marginverticalsize}) => marginverticalsize};
   margin-bottom: ${({marginverticalsize}) => marginverticalsize};
`
