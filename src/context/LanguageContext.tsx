import get from "lodash.get";
import * as React from "react";
import {Language, LanguageKey} from "../constants/enums";
import useLocalStorage from "../service/useLocalStorage";
import {Dispatch} from "react";

export type TLanguages = {
  [key in Language]?: unknown;
};

interface Props {
  language: Language,
  setLanguage: Dispatch<Language>;
  t: (path: string) => string;
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
  const [language, setLanguage] = useLocalStorage<Language>(LanguageKey, Language.ENGB);

  const t = (path: string) => {
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
