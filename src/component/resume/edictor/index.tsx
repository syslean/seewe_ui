import React from 'react';
import Basics from "../basics";
import Works from "../works";
import {Divider} from "antd";

const Editor: React.FC<Props> = () => {
  return (
    <div style={{ margin: "0.25rem"}}>
      <Basics/>

      <Divider />

      <Works/>
    </div>
  )
}

export default Editor;

interface Props {

}
