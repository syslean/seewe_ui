interface ResumeModal {
  id: string;
  uid: string;
  resumeName: string;
  profile: Profile,
  workExperiences: WorkExperienceModal[];
  skills: SkillModal[];
  educations: EducationModal[];
  publications: PublicationModal[]
}

interface Profile {
  name: string;
  title: string;
  phone: string;
  email: string;
  about: string;
}

interface WorkExperienceModal {
  id: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
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
  startDate: string;
  endDate: string;
}

interface PublicationModal {
  id: string;
  title: string;
  describe: string;
  date: string;
}
