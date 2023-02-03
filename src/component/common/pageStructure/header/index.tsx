import React, {useContext} from 'react';
import {HeaderWrapper, SeeweLogo} from "./index.style";
import {LanguageContext} from "../../../../context/LanguageContext";

const Header: React.FC = () => {
  const {t} = useContext(LanguageContext);
  return (
    <HeaderWrapper>
      <div>
        <SeeweLogo/>
        <span>{t("common.header")}</span>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
