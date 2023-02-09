import useLocalStorage from "../useLocalStorage";
import initResume from "../../mock/mockResume01.json";

const RESUME_DATA = "{}"
export interface ResumeService {
  resume: ResumeModal,
}

const useResume = () => {
  const [resume, setResume] = useLocalStorage<ResumeModal>(RESUME_DATA, initResume as unknown as ResumeModal);

  const resumeService: ResumeService = {

    resume: resume as ResumeModal,
  }

  return resumeService;
}

export default useResume;
