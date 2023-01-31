import useLocalStorage from "../useLocalStorage";
import {RESUME_DATA} from "../../constants";
import initResume from "../../mock/mockResume01.json";

export interface ResumeService {
  resume: ResumeModal,
  updateBasicInfo: (basicInfo: BasicInfo) => void,
  updateWorkExperience: (id: string, workExperience: WorkExperienceModal) => void,
  addWorkExperience: (workExperience: WorkExperienceModal) => void,
  deleteWorkExperience: (id: string) => void
}

const useResume = () => {
  const [resume, setResume] = useLocalStorage<ResumeModal>(RESUME_DATA, initResume as unknown as ResumeModal);

  const resumeService: ResumeService = {

    resume: resume as ResumeModal,

    updateBasicInfo: (basicInfo: BasicInfo) => {
      setResume({...resume, basicInfo: {...basicInfo}});
    },

    updateWorkExperience: (id: string, workExperience: WorkExperienceModal) => {
      const {workExperiences} = resume;
      const updateWorkExperiences = workExperiences.map(
        (item) => item.id === id ? workExperience : item
      );
      setResume({...resume, workExperiences: updateWorkExperiences})
    },

    addWorkExperience: (workExperience: WorkExperienceModal) => {
      // fix: id generator in back end
      workExperience.id = Math.ceil(Math.random() * 1000000).toString();
      const {workExperiences} = resume;
      workExperiences.push(workExperience);
      setResume({...resume, workExperiences: workExperiences});
    },

    deleteWorkExperience: (id: string) => {
      const {workExperiences} = resume;
      const index = workExperiences.findIndex((item) => item.id === id);
      index > -1 || workExperiences.splice(index, 1);
      setResume({...resume, workExperiences: workExperiences})
    }
  }

  return resumeService;
}

export default useResume;
