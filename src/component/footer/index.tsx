import React from 'react';
import {Space} from "antd";
import Link from "antd/lib/typography/Link";

const Footer: React.FC<Props> = () => {
  const nowTime = new Date();

  return (
    <div style={{textAlign: "center", padding: "1rem"}}>
      <Space direction="vertical" align="center" size="small">
        <Link href="https://github.com/syslean" target="_blank">Made with ❤ by syslean</Link>
        <div>©2023.1 - {nowTime.getFullYear()}.{nowTime.getMonth() + 1}</div>
      </Space>
    </div>

  )
}

export default Footer;

interface Props {

}
