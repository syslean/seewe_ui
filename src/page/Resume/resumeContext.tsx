import React, {Context, createContext} from "react";
import initResume from "../../mock/mockResume01.json";
import useLocalStorage from "./useLocalStorage";
import {RESUME_DATA} from "../../constants";

interface ResumeData {
  resume: ResumeModal,
  setBasicInfo: (basicInfo: BasicInfo) => void,
}

export const ResumeContext: Context<ResumeData> = createContext({} as unknown as ResumeData);


export const ResumeProvider: React.FC<Props> = ({children}: Props) => {
  let [resume, setResume] = useLocalStorage(RESUME_DATA ,initResume as unknown as ResumeModal);

  const resumeData = {
    resume: resume,
    setBasicInfo: (basicInfo: BasicInfo) => {
      setResume({...resume, basicInfo});
    }
  }

  return (
    <ResumeContext.Provider value={{...resumeData}}>
      {children}
    </ResumeContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};
