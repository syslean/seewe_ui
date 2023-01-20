interface ResumeModal {
  id: string;
  uid: string;
  resumeName: string;
  basicInfo: BasicInfo,
  workExperiences: WorkExperienceModal[];
  skills: SkillModal[];
  educations: EducationModal[];
  publications: PublicationModal[]
}

interface BasicInfo {
  fullName: string;
  summary: string;
}

interface WorkExperienceModal {
  id: string;
  name: string;
  position: string;
  startDate: Date;
  endDate: Date;
  summary: string;
}

interface SkillModal {
  id: string;
  title: string;
  describe: string;
}

interface EducationModal {
  id: string;
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

interface PublicationModal {
  id: string;
  title: string;
  describe: string;
  date: Date;
}
