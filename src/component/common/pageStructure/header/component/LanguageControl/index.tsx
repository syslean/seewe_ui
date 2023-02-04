import React, {useContext} from 'react';
import {LanguageContext} from "../../../../../../context/LanguageContext";
import {Language} from "../../../../../../constants/enums";
import {LanguageControlWrapper, LanguageLabel} from "./index.style";

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
  return (<LanguageControlWrapper>
      {languages.map(({language: lang, label}, index) => {
        return <LanguageLabel key={index} isSelected={lang === language}
                              onClick={() => setLanguage(lang)}>{label}</LanguageLabel>
      })}
    </LanguageControlWrapper>
  )
}

export default LanguageControl;
