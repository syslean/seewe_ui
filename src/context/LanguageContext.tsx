import get from "lodash.get";
import * as React from "react";
import {Language, LanguageKey} from "../constants/enums";
import useLocalStorage from "../service/useLocalStorage";

export type TLanguages = {
  [key in Language]?: unknown;
};

export const LanguageContext = React.createContext({
  language: Language.ENGB,
  // eslint-disable-next-line
} as any);

export const LanguageProvider = ({
                                   children,
                                   languages,
                                 }: {
  children: React.ReactNode;
  languages?: TLanguages;
}): React.ReactElement => {
  const [language, setLanguage] = useLocalStorage<Language>(LanguageKey, Language.ENGB);

  const t = (path: string) => {
    return get(languages, `${language}.${path}`, "");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        t,
        setLanguage: (lang: Language) => setLanguage(lang),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
