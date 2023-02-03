import React, {ReactNode} from "react";
import {SubCardWrapper, SubContainer, SubHeader} from "./index.style";

interface Props {
  children: ReactNode
}


const SubCard: React.FC<Props> = ({children}: Props) => {
  return (
    <SubCardWrapper>
      <SubHeader/>
      <SubContainer>
        {children}
      </SubContainer>
    </SubCardWrapper>
  )
}

export default SubCard;
