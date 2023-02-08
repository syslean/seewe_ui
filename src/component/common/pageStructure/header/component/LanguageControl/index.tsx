import React, {useContext} from 'react';
import {LanguageContext} from "../../../../../../context/LanguageContext";
import {Language} from "../../../../../../constants/enums";
import {LanguageControlWrapper, LanguageLabel, NavMenu, SelectButton, SelectMenu} from "./index.style";
import {ReactComponent as ArrowSvg} from "../../../../../../assets/img/arrow.svg";
import {Dropdown} from "antd";

const LanguageControl: React.FC = () => {
  const {language, setLanguage} = useContext(LanguageContext);
  const languages = {
    [Language.ENGB]: "English",
    [Language.ZHCN]: "中文",
  };

  const switchLanguage = (lang: Language) => () => {
    setLanguage(lang);
  }

  const generateItems = () => {
    return Object.entries(languages).map(([lang, label], index) => (
      {
        key: index,
        label: (<div onClick={switchLanguage(lang as Language)}>{label}</div>),
      }));
  }

  return (
    <LanguageControlWrapper>
      <NavMenu>
        {Object.entries(languages).map(([lang, label], index) => {
          return <LanguageLabel key={index} isSelected={lang === language}
                                onClick={switchLanguage(lang as Language)}>{label}</LanguageLabel>
        })}
      </NavMenu>
      <SelectMenu>
        <Dropdown menu={{items: generateItems()}} trigger={['click']}>
          <SelectButton>
            {languages[language]}
            <ArrowSvg/>
          </SelectButton>
        </Dropdown>
      </SelectMenu>
    </LanguageControlWrapper>
  )
}

export default LanguageControl;
