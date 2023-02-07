import React, {MouseEventHandler, ReactNode} from "react";
import {HeaderActions} from "../card/header/index.style";
import {SubCardWrapper, SubContainer, SubHeader} from "./index.style";
import Action from "../action";

interface Props {
  actions?: {
    onClick: MouseEventHandler<HTMLElement>,
    icon: ReactNode,
  }[],
  children: ReactNode
}


const SubCard: React.FC<Props> = ({children, actions}: Props) => {
  return (
    <SubCardWrapper>
      <SubHeader>
        <HeaderActions>
          {actions &&
          actions.map(({icon, onClick}, index) => (<Action key={index} icon={icon} onClick={onClick}/>))}
        </HeaderActions>
      </SubHeader>
      <SubContainer>
        {children}
      </SubContainer>
    </SubCardWrapper>
  )
}

export default SubCard;
