import React from 'react';
import Link from "antd/lib/typography/Link";
import {getYearAndMonth} from "../../../utils";
import {FooterWrapper, TimeLine} from "./index.style";

const Footer: React.FC = () => {

  return (
    <FooterWrapper>
        <Link href="https://github.com/syslean" target="_blank">Made with ❤ by syslean</Link>
        <TimeLine>©2023.1 - {getYearAndMonth(new Date())}</TimeLine>
    </FooterWrapper>

  )
}

export default Footer;
