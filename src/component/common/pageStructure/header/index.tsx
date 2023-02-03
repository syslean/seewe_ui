import React, {useContext} from 'react';
import {HeaderWrapper, SeeweLogo} from "./index.style";
import {LanguageContext} from "../../../../context/LanguageContext";
import LanguageControl from "./component/LanguageControl";

const Header: React.FC = () => {
  const {t} = useContext(LanguageContext);
  return (
    <HeaderWrapper>
      <div>
        <SeeweLogo/>
        <span>{t("common.header")}</span>
        <LanguageControl />
      </div>
    </HeaderWrapper>
  )
}

export default Header;
