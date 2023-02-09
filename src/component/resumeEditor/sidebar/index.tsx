import React from 'react';
import MenuItem from "./menuItem";
import {SideBarWrapper} from "./index.style";

const SideBar: React.FC<Props> = ({items}: Props) => {
  return (
    <SideBarWrapper>
      {
        items.map((item, index) => <MenuItem key={index} title={item.label} label={item.label}/>)
      }
    </SideBarWrapper>
  )
};

interface Props {
  items: { label: string }[]
}

export default SideBar;
