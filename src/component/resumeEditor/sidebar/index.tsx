import React from 'react';
import MenuItem from "./menuItem";
import {SideBarWrapper} from "./index.style";

const SideBar: React.FC<Props> = ({items}: Props) => {
  return (
    <SideBarWrapper>
      {
        items.map((item, index) => <MenuItem key={index} title={item.title} label={item.label}/>)
      }
    </SideBarWrapper>
  )
};

interface Props {
  items: { title: string; label: string }[]
}

export default SideBar;
