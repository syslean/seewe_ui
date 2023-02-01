import React from 'react';
import {HeaderWrapper, SeeweLogo} from "./index.style";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div>
        <SeeweLogo />
        <span>SEEWE RESUME</span>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
