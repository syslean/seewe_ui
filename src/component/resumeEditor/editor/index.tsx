import React from 'react';
import {EditorInnerCard, EditorWrapper} from "./index.style";
import {RESUME_COMPONENT_MAPPING} from "../../../page/ResumeEditor";

interface Props {
  items: { label: string }[]
}

const Editor: React.FC<Props> = ({items}: Props) => {
  return (
    <EditorWrapper>
      {items.map(({label}, index) => {
        return <EditorInnerCard key={index} id={label}>{RESUME_COMPONENT_MAPPING[label].component}</EditorInnerCard>
      })}
    </EditorWrapper>
  )
}

export default Editor;
