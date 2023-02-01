import React, {ReactNode} from 'react';
import {EditorWrapper} from "./index.style";

interface Props {
  items: { title: string, modal: ReactNode }[]
}
const Editor: React.FC<Props> = ({items}: Props) => {
  return (
    <EditorWrapper>
      {items.map((item, index) => {
        return <div key={index} id={item.title}>{item.modal}</div>
      })}
    </EditorWrapper>
  )
}

export default Editor;
