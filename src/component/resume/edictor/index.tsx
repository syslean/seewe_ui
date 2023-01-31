import React, {ReactNode} from 'react';
import styled from "styled-components";

const WrappedWithScroll = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Editor: React.FC<Props> = ({items}: Props) => {
  return (
    <WrappedWithScroll style={{padding: "1rem", height: "80vh"}}>
      {items.map((item, index) => {
        return <div key={index} id={item.title}>{item.modal}</div>
      })}
    </WrappedWithScroll>
  )
}

export default Editor;

interface Props {
  items: { title: string, icon: ReactNode, modal: ReactNode }[]
}
