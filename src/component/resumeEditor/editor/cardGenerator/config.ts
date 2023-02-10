import {FIELD_TYPE} from "./baseField";
import {ResumeKey} from "../../../../constants/enums";

export interface ResumeConfig {
  name: string;
  modules: Module[];
}

export interface Module {
  storeKey: string;
  label: string;
  type: string;
  fields: {
    label: string;
    value: string;
    type: string;
    options?: {
      label: string,
      value: string,
    }[],
  }[];
  hint?: string;
}

export const config: ResumeConfig = {
  name: "Resume",
  modules: [
    {
      storeKey: ResumeKey.profile,
      label: "editor.profile.key",
      type: "none",
      fields: [
        {
          label: "editor.profile.name",
          value: "name",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.profile.title",
          value: "title",
          type: FIELD_TYPE.TEXT,
        },
        {
          label: "editor.profile.phone",
          value: "phone",
          type: FIELD_TYPE.TEXT,
        },
        {
          label: "editor.profile.email",
          value: "email",
          type: FIELD_TYPE.TEXT,
        },
        {
          label: "editor.profile.about",
          value: "about",
          type: FIELD_TYPE.AREA,
        },
      ]
    },
    {
      storeKey: ResumeKey.educations,
      label: "editor.educations.key",
      hint: "hint.noEducation",
      type: "list",
      fields: [
        {
          label: "editor.educations.school",
          value: "school",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.educations.major",
          value: "major",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.educations.degree",
          value: "degree",
          type: FIELD_TYPE.SELECTOR,
          options: [
            {label: "editor.educations.degreeType.associate", value: "associate"},
            {label: "editor.educations.degreeType.bachelor", value: "bachelor"},
            {label: "editor.educations.degreeType.master", value: "master"},
            {label: "editor.educations.degreeType.doctor", value: "doctor"}
          ]
        },
        {
          label: "editor.educations.period",
          value: "period",
          type: "dateRange"
        }
      ]
    },
    {
      storeKey: ResumeKey.experiences,
      label: "editor.experiences.key",
      type: "list",
      hint: "hint.noExperience",
      fields: [
        {
          label: "editor.experiences.name",
          value: "name",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.experiences.position",
          value: "position",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.experiences.period",
          value: "period",
          type: FIELD_TYPE.DATE_RANGE
        },
        {
          label: "editor.experiences.summary",
          value: "summary",
          type: FIELD_TYPE.AREA,
        },
      ]
    },
    {
      storeKey: ResumeKey.publications,
      label: "editor.publications.key",
      type: "list",
      hint: "hint.noPublication",
      fields: [
        {
          label: "editor.publications.name",
          value: "name",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.publications.publishedAt",
          value: "publishedAt",
          type: FIELD_TYPE.DATE
        }
      ]
    }
  ]
}
