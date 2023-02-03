import React, {ReactNode} from "react";
import { HeaderActions } from "../card/header/index.style";
import {SubCardWrapper, SubContainer, SubHeader} from "./index.style";

interface Props {
  actions?: ReactNode[],
  children: ReactNode
}


const SubCard: React.FC<Props> = ({children, actions}: Props) => {
  return (
    <SubCardWrapper>
      <SubHeader>
        <HeaderActions>
          {actions &&
          actions.map((action) => action)}
        </HeaderActions>
      </SubHeader>
      <SubContainer>
        {children}
      </SubContainer>
    </SubCardWrapper>
  )
}

export default SubCard;
