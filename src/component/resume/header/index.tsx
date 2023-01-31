import React from 'react';
import {UserOutlined} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import {WrappedDivider} from "../../common/divider";

const Header: React.FC<Props> = ({title, description}: Props) => {
  return (
    <div>
      <Meta
        avatar={<UserOutlined style={{fontSize: "2em", lineHeight: "3rem"}}/>}
        title={title}
        description={description}
      />
      <WrappedDivider marginverticalsize="1rem"/>
    </div>

  )
}

export default Header;

interface Props {
  title: string;
  description: string;
}
