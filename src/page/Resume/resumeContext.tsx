import React, {Context, createContext} from "react";
import useResume, {ResumeService} from "../../service/resume";

export const ResumeContext: Context<ResumeService> = createContext({} as unknown as ResumeService);

type Props = {
  children: React.ReactNode;
};

export const ResumeProvider: React.FC<Props> = ({children}: Props) => {
  const resumeService = useResume();
  return (
    <ResumeContext.Provider value={{...resumeService}}>
      {children}
    </ResumeContext.Provider>
  );
};

