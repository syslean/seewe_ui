import React, {MouseEventHandler, ReactNode} from "react";
import {HeaderWrapper, HeaderActions, HeaderTitle} from "./index.style";
import Action from "../../action";

interface Props {
  title: string;
  actions?: {
    icon: ReactNode,
    onClick: MouseEventHandler<HTMLElement>
  }[];
}

const Header: React.FC<Props> = ({title, actions}: Props) => {

  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      {actions &&
      <HeaderActions>
        {actions.map(({icon, onClick}, index) => <Action icon={icon} onClick={onClick} key={index}/>)}
      </HeaderActions>
      }
    </HeaderWrapper>
  )
}

export default Header;
