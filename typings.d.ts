interface ResumeModal {
  id: string;
  uid: string;
  resumeName: string;
  profile: Profile,
  experiences: ExperienceModal[];
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

interface EducationModal {
  school: string;
  major: string;
  degree: string;
  period: [string, string];
}

interface ExperienceModal {
  name: string;
  position: string;
  period: [string, string];
  summary: string;
}

interface PublicationModal {
  name: string;
  publishedAt: string;
}
