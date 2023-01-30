import React from 'react';
import {Space} from "antd";
import Link from "antd/lib/typography/Link";
import {getYearAndMonth} from "../../utils";

const Footer: React.FC<Props> = () => {

  return (
    <div style={{textAlign: "center", padding: "1rem"}}>
      <Space direction="vertical" align="center" size="small">
        <Link href="https://github.com/syslean" target="_blank">Made with ❤ by syslean</Link>
        <div>©2023.1 - {getYearAndMonth(new Date())}</div>
      </Space>
    </div>

  )
}

export default Footer;

interface Props {

}
