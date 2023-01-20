import React, {Context, createContext} from "react";
import resume from "../../mock/mockResume01.json";

export const ResumeContext: Context<ResumeModal> = createContext(
  {} as ResumeModal,
);

export const ResumeProvider: React.FC<Props> = ({children}: Props) => {
  return (
    <ResumeContext.Provider value={resume as unknown as ResumeModal}>
      {children}
    </ResumeContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};
