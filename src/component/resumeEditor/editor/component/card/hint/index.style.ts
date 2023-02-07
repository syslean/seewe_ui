import styled from "styled-components";
import {ReactComponent as ErrorSvg} from "../../../../../../assets/img/error.svg";

export const HintWrapper = styled.div`
  padding: 1.5rem 0 1rem 0;
  line-height: 1.25rem;

  font-family: "Open Sans", serif;
  font-size: 0.75rem;
  text-align: center;

  color: #494949;

`

export const ErrorIcon = styled(ErrorSvg)`
  width: 1.25rem;
  height: 1.25rem;
`
