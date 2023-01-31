import styled from "styled-components";

export const Title = styled.div`
  font: normal 1.5rem 'Lucida Grande';
  line-height: 3rem;
  text-align: center;
`

export const HeaderWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  -webkit-transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1100;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0px -1px 1px var(--muidocs-palette-grey-100);
  background-color: rgba(255,255,255,0.8);
`
