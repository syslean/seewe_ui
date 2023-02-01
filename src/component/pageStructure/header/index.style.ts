import styled from "styled-components";
import {ReactComponent as Logo} from "../../../assets/img/logo.svg";

export const SeeweLogo = styled(Logo)`
  height: 2.5rem;
  width: auto;
  padding: 0.5rem 0;
`

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1100;
  backdrop-filter: blur(8px);
  box-shadow: inset 0px -1px 1px #EEE;
  background-color: rgba(255,255,255,0.8);
  display: flex;
  justify-content: center;
`
