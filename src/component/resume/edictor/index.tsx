import React from 'react';
import Basics from "../basics";
import Works from "../works";

const Editor: React.FC<Props> = () => {
  return (
    <div style={{margin: "1rem"}}>
      <Basics/>
      <Works/>
    </div>
  )
}

export default Editor;

interface Props {

}
