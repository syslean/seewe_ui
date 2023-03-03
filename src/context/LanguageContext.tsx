import get from "lodash.get";
import React from 'react';
import {Language, LANGUAGE_KEY} from "../constants/enums";
import useLocalStorage from "../hook/useLocalStorage";
import {Dispatch} from "react";

export type TLanguages = {
  [key in Language]?: unknown;
};

interface Props {
  language: Language,
  setLanguage: Dispatch<Language>;
  t: (path: string| undefined) => string;
}

export const LanguageContext = React.createContext<Props>({
  language: Language.ENGB,
} as Props);

export const LanguageProvider = ({
                                   children,
                                   languages,
                                 }: {
  children: React.ReactNode;
  languages?: TLanguages;
}): React.ReactElement => {
  const [language, setLanguage] = useLocalStorage<Language>(LANGUAGE_KEY, Language.ENGB);

  const t = (path: string| undefined) => {
    return get(languages, `${language}.${path}`, "");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (lang: Language) => setLanguage(lang),
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
