import React, {ReactNode} from 'react';
import {EditorInnerCard, EditorWrapper} from "./index.style";

interface Props {
  items: { title: string, modal: ReactNode }[]
}

const Editor: React.FC<Props> = ({items}: Props) => {
  return (
    <EditorWrapper>
      {items.map((item, index) => {
        return <EditorInnerCard key={index} id={item.title}>{item.modal}</EditorInnerCard>
      })}
    </EditorWrapper>
  )
}

export default Editor;
