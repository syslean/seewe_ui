import React from 'react';
import Link from "antd/lib/typography/Link";
import {getYearAndMonth} from "../../../utils";
import {FooterWrapper} from "./index.style";

const Footer: React.FC = () => {

  return (
    <FooterWrapper>
        <Link href="https://github.com/syslean" target="_blank">Made with ❤ by syslean</Link>
        <div>©2023.1 - {getYearAndMonth(new Date())}</div>
    </FooterWrapper>

  )
}

export default Footer;
