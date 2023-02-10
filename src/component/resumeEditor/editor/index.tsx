import React from 'react';
import {EditorInnerCard, EditorWrapper} from "./index.style";
import {RESUME_COMPONENT_MAPPING} from "../../../page/ResumeEditor";
import Generator from "./generator";

interface Props {
  labels: string[]
}

const Editor: React.FC<Props> = ({labels}: Props) => {
  return (
    <EditorWrapper>
      {labels.map((label, index) => {
        return (
          <EditorInnerCard key={index} id={label}>
            <Generator module={RESUME_COMPONENT_MAPPING[label]}/>
          </EditorInnerCard>
        )
      })}
    </EditorWrapper>
  )
}

export default Editor;
