import React, {ReactNode} from "react";
import {CardContainerWrapper} from "./index.style";

interface Props {
  children: ReactNode
}

const CardContainer: React.FC<Props> = ({children}: Props) => {

  return (
    <CardContainerWrapper>
      {children}
    </CardContainerWrapper>
  )
}

export default CardContainer;
