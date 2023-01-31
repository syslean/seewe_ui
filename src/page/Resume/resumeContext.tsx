import React, {Context, createContext} from "react";
import useResume, {ResumeService} from "../../service/resume";

export const ResumeContext: Context<ResumeService> = createContext({} as unknown as ResumeService);


export const ResumeProvider: React.FC<Props> = ({children}: Props) => {
  const resumeService = useResume();

  return (
    <ResumeContext.Provider value={{...resumeService}}>
      {children}
    </ResumeContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};
