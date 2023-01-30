import React from 'react';
import Basics from "../basics";
import Works from "../works";
import {WrappedDivider} from "../../common/divider";

const Editor: React.FC<Props> = () => {
  return (
    <div style={{margin: "0.25rem"}}>
      <Basics/>

      <WrappedDivider marginVerticalSize="1rem"/>

      <Works/>
    </div>
  )
}

export default Editor;

interface Props {

}
