import React, {ReactNode} from "react";
import {ContainerWrapper} from "./index.style";

interface Props {
  children: ReactNode
}

const Container: React.FC<Props> = ({children}: Props) => {

  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container;
