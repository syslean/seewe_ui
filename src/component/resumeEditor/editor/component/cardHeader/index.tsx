import React, {ReactNode} from "react";
import {CardHeaderWrapper, HeaderActions, HeaderTitle} from "./index.style";

interface Props {
  title: string;
  actions?: ReactNode[]
}

const CardHeader: React.FC<Props> = ({title, actions}: Props) => {

  return (
    <CardHeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      {/*{actions &&*/}
      {/*<HeaderActions>*/}
      {/*  {actions.map((action) => {*/}
      {/*    return action*/}
      {/*  })}*/}
      {/*</HeaderActions>*/}
      {/*}*/}

    </CardHeaderWrapper>
  )
}

export default CardHeader;
