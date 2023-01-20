interface ResumeModal {
  id: string;
  uid: string;
  avatar: string;
  fullName: string;
  summary: string;
  resumeName: string;
  workExperiences: WorkExperienceModal[];
  skills: SkillModal[];
  educations: EducationModal[];
  publications: PublicationModal[]
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
  level: number;
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
