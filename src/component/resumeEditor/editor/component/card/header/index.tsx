import React, {ReactNode} from "react";
import {HeaderWrapper, HeaderActions, HeaderTitle} from "./index.style";

interface Props {
  title: string;
  actions?: ReactNode[]
}

const Header: React.FC<Props> = ({title, actions}: Props) => {

  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      {actions &&
      <HeaderActions>
        {actions.map((action) => action)}
      </HeaderActions>
      }
    </HeaderWrapper>
  )
}

export default Header;
