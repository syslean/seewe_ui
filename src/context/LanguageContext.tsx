import get from "lodash.get";
import * as React from "react";
import {useState} from "react";
import {Language} from "../constants/enums";

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
  const [language, setLanguage] = useState(Language.ENGB);

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
