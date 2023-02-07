import React, {useContext} from 'react';
import {LanguageContext} from "../../../../../../context/LanguageContext";
import {Language} from "../../../../../../constants/enums";
import {LanguageControlWrapper, LanguageLabel, NavMenu, SelectMenu} from "./index.style";
import {Dropdown} from "antd";

const LanguageControl: React.FC = () => {
  const {language, setLanguage} = useContext(LanguageContext);
  const languages = [
    {
      label: "English",
      language: Language.ENGB
    },
    {
      label: "中文",
      language: Language.ZHCN
    }
  ];

  const switchLanguage = (language: Language) => () => {
    setLanguage(language);
  }

  const generateItems = () => {
    return languages.map(({label, language}, index) => (
      {
        key: index.toString(),
        label: (<div onClick={switchLanguage(language)}>{label}</div>),
      }));
  }

  return (
    <LanguageControlWrapper>
      <NavMenu>
        {languages.map(({language: lang, label}, index) => {
          return <LanguageLabel key={index} isSelected={lang === language}
                                onClick={switchLanguage(lang)}>{label}</LanguageLabel>
        })}
      </NavMenu>
      <SelectMenu>
        <Dropdown menu={{items: generateItems()}} trigger={['click']}>
          <div>语言</div>
        </Dropdown>
      </SelectMenu>
    </LanguageControlWrapper>
  )
}

export default LanguageControl;
