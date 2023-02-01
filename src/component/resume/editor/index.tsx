import React, {ReactNode} from 'react';
import { EditorWrapper } from './index.style';

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

interface Props {
  items: { title: string, icon: ReactNode, modal: ReactNode }[]
}
