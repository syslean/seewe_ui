import styled from "styled-components";

export const LanguageControlWrapper = styled.div`
  margin-left: auto;

  font-size: 1.25rem;
  display: flex;
`

export const LanguageLabel = styled.span<{
  isSelected: boolean;
}>`
  margin: 0 0.25rem;
  color: ${(props) => props.isSelected ? "#162A48": "#b1b1b1"};
  //font-weight: ${(props) => props.isSelected ? 600: 200};
`


export const NavMenu = styled.div`
  // phone size
  @media (max-width: 480px) {
    display: none;
  }
`;

export const SelectMenu = styled.div`
  display: none;

  // phone size
  @media (max-width: 480px) {
    display: inline-block;
  }
`;

export const SelectButton = styled.div`
  display: flex;
  align-items: center;


  font-size: 1rem;
  font-weight: normal;

  color: #3D3D3D;

`
