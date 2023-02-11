import React from 'react';
import MenuItem from "./menuItem";
import {SideBarWrapper} from "./index.style";

const SideBar: React.FC<Props> = ({labels}: Props) => {
  return (
    <SideBarWrapper>
      {
        labels.map((label, index) => <MenuItem key={index} label={label}/>)
      }
    </SideBarWrapper>
  )
};

interface Props {
  labels: string[]
}

export default SideBar;
