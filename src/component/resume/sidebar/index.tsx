import React, {ReactNode} from 'react';
import {Space} from 'antd';
import MenuItem from "../../common/menuItem";


const SideBar: React.FC<Props> = ({items}: Props) => {

  return (
    <Space direction="vertical" size="middle" align="center" style={{width: "100%", paddingTop: "2rem"}}>
      {
        items.map((item, index) => {
          return <MenuItem key={index} icon={item.icon} title={item.title}/>
        })
      }
    </Space>
  )
};

interface Props {
  items: { title: string, icon: ReactNode }[]
}

export default SideBar;
