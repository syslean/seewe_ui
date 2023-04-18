import React from 'react';
import {FooterWrapper, Copyright} from "./index.style";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>Seewe Team © 2023 <a href={"https://beian.miit.gov.cn"}> 蜀ICP备2022005914号-1 </a></Copyright>
    </FooterWrapper>
  )
}

export default Footer;
