import React from "react";
import {ErrorIcon, HintWrapper} from "./index.style";



const Hint: React.FC = () => {
  return (
    <HintWrapper>
      <div><ErrorIcon/></div>
      No education experience added.<br/>
      Please click the plus sign in the top right corner to add :)
    </HintWrapper>
  );
}

export default Hint;
