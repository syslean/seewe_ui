import React from 'react';
import {EditorInnerCard, EditorWrapper} from "./index.style";
import {RESUME_COMPONENT_MAPPING} from "../../../page/ResumeEditor";

interface Props {
  items: { title: string }[]
}

const Editor: React.FC<Props> = ({items}: Props) => {
  return (
    <EditorWrapper>
      {items.map((item, index) => {
        return <EditorInnerCard key={index} id={item.title}>{RESUME_COMPONENT_MAPPING[item.title]}</EditorInnerCard>
      })}
    </EditorWrapper>
  )
}

export default Editor;
