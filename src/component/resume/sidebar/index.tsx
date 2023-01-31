import React, {ReactNode} from 'react';
import MenuItem from "../../common/menuItem";
import {SideBarWrapper} from "./index.style";


const SideBar: React.FC<Props> = ({items}: Props) => {
  return (
    <SideBarWrapper>
      {
        items.map((item, index) => {
          return <MenuItem key={index} icon={item.icon} title={item.title}/>
        })
      }
    </SideBarWrapper>
  )
};

interface Props {
  items: { title: string, icon: ReactNode }[]
}

export default SideBar;
