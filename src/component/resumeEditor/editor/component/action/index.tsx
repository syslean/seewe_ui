import React, {ReactNode} from "react";
import {ActionWrapper} from "./index.style";

interface Props {
  icon: ReactNode
  onClick: React.MouseEventHandler<HTMLElement>
}

const Action: React.FC<Props> = ({icon, onClick}: Props) => {

  return (
    <ActionWrapper onClick={onClick}>
      {icon}
    </ActionWrapper>
  )
}

export default Action;
