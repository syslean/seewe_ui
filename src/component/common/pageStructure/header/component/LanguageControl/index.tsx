import React, {useContext} from 'react';
import {LanguageContext} from "../../../../../../context/LanguageContext";
import {Language} from "../../../../../../constants/enums";
import {LanguageControlWrapper, LanguageLabel, NavMenu, SelectMenu} from "./index.style";
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
          <div>{languages[language]}</div>
        </Dropdown>
      </SelectMenu>
    </LanguageControlWrapper>
  )
}

export default LanguageControl;
