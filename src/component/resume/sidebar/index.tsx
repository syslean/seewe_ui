import React from 'react';
import {
  ShoppingFilled,
  UserOutlined,
} from '@ant-design/icons';
import {Menu} from 'antd';
import {getItem} from "../../../utils";
import {MenuInfo} from "rc-menu/lib/interface";
import {EducationIcon, PublicationIcon, SkillIcon} from "../../common/icons";


const resumeItems = [
  getItem('Basics', '1', <UserOutlined />),
  getItem('Works', '2', <ShoppingFilled />),
  getItem('Skills', '3', <SkillIcon/>),
  getItem('Educations', '4', <EducationIcon/>),
  getItem('Publications', '5', <PublicationIcon/>),
];

const SideBar: React.FC = () => {

  const handleClick = ({key}: MenuInfo) => {
    // todo: index Editor
    alert(`key ${key} is clicked~`);
  }

  return (
    <Menu
      style={{ height: "86vh"}}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="vertical"
      inlineCollapsed={true}
      items={resumeItems}
      onClick={handleClick}
    />
  );
};

export default SideBar;
