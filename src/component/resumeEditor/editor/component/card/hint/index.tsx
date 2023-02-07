import React from "react";
import {ErrorIcon, HintWrapper} from "./index.style";

interface Props {
  value: string;
}

const Hint: React.FC<Props> = ({value}: Props) => {

  return (
    <HintWrapper>
      <div><ErrorIcon/></div>
      {value}
    </HintWrapper>
  );
}

export default Hint;
