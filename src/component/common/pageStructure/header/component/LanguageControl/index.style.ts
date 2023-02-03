import styled from "styled-components";

export const LanguageControlWrapper = styled.div`
  margin-left: auto;
  font-family: "Open Sans", serif;
  font-size: 1.25rem;
  display: flex;
`

export const LanguageLabel = styled.span<{
  isSelected: boolean;
}>`
  margin: 0 0.25rem;
  color: ${(props) => props.isSelected ? "#162A48": "#b1b1b1"};
  font-weight: ${(props) => props.isSelected ? 600: 200};
`
