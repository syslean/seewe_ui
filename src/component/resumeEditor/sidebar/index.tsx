import React from 'react';
import MenuItem from "../../common/menuItem";
import {SideBarWrapper} from "./index.style";

const SideBar: React.FC<Props> = ({items}: Props) => {
  return (
    <SideBarWrapper>
      {
        items.map((item, index) => <MenuItem key={index} title={item.title}/>)
      }
    </SideBarWrapper>
  )
};

interface Props {
  items: { title: string }[]
}

export default SideBar;
