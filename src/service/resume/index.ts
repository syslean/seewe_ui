import useLocalStorage from "../useLocalStorage";
import {RESUME_DATA} from "../../constants";
import initResume from "../../mock/mockResume01.json";

export interface ResumeService {
  resume: ResumeModal,
  setBasicInfo: (basicInfo: BasicInfo) => void,
}

const useResume = () => {
  const [resume, setResume] = useLocalStorage(RESUME_DATA, initResume as unknown as ResumeModal);

  const resumeService = {
    resume: resume,
    setBasicInfo: (basicInfo: BasicInfo) => {
      setResume({...resume, basicInfo: {...basicInfo}});
    }
  }

  return resumeService;
}

export default useResume;
