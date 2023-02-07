import styled from "styled-components";
import {ReactComponent as Logo} from "../../../../assets/img/logo.svg";

export const HeaderWrapper = styled.div`
  padding: 0 1rem;
  height: 4rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  box-shadow: inset 0px -1px 1px #EEE;
  background-color: rgba(255, 255, 255, 0.8);


  > div {
    height: 100%;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > span {
      font-family: "Open Sans", serif;
      font-size: 1.25rem;
      font-weight: 600;
      color: #162A48;
    }
  }
`

export const SeeweLogo = styled(Logo)`
  height: 2.5rem;
  width: auto;
  padding-right: 0.5rem;
`
