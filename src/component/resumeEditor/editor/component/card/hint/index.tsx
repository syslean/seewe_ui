import React from "react";
import {ErrorIcon, HintText, HintWrapper} from "./index.style";

interface Props {
  value: string;
}

const Hint: React.FC<Props> = ({value}: Props) => {

  return (
    <HintWrapper>
      <ErrorIcon/>
      <HintText>{value}</HintText>
    </HintWrapper>
  );
}

export default Hint;
