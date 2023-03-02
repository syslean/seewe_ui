import {RESUME_KEY} from "../../../../constants/enums";
import {FIELD_TYPE} from "../component/field";
import {ICON_TYPE} from "../../sidebar/menuItem";
import {GENERATOR_TYPE} from "./index";

export interface ResumeConfig {
  name: string;
  modules: Module[];
}

export interface Option {
  label: string,
  value: string,
}

export interface Module {
  storeKey: string;
  label: string;
  type: GENERATOR_TYPE;
  icon: ICON_TYPE;
  fields: {
    label: string;
    value: string;
    type: string;
    options?: Option[],
  }[];
  hint?: string;
}

export const resumeConfig: ResumeConfig = {
  name: "Resume",
  modules: [
    {
      storeKey: RESUME_KEY.PROFILE,
      label: "editor.profile.key",
      type: GENERATOR_TYPE.BASIC,
      icon: ICON_TYPE.PROFILE,
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
      storeKey: RESUME_KEY.EXPERIENCES,
      label: "editor.experiences.key",
      type: GENERATOR_TYPE.LIST,
      hint: "hint.noExperience",
      icon: ICON_TYPE.EXPERIENCES,
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
      storeKey: RESUME_KEY.EDUCATIONS,
      label: "editor.educations.key",
      hint: "hint.noEducation",
      type: GENERATOR_TYPE.LIST,
      icon: ICON_TYPE.EDUCATIONS,
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
      storeKey: RESUME_KEY.PUBLICATIONS,
      label: "editor.publications.key",
      type: GENERATOR_TYPE.LIST,
      hint: "hint.noPublication",
      icon: ICON_TYPE.PUBLICATIONS,
      fields: [
        {
          label: "editor.publications.name",
          value: "name",
          type: FIELD_TYPE.TEXT
        },
        {
          label: "editor.publications.type",
          value: "type",
          type: FIELD_TYPE.SELECTOR,
          options:[
            { label: 'editor.publications.publicationType.book', value: 'book' },
            { label: 'editor.publications.publicationType.journalArticle', value: 'journalArticle' },
            { label: 'editor.publications.publicationType.conferencePaper', value: 'conferencePaper' },
            { label: 'editor.publications.publicationType.thesis', value: 'thesis' },
            { label: 'editor.publications.publicationType.dissertation', value: 'dissertation' },
            { label: 'editor.publications.publicationType.report', value: 'report' },
            { label: 'editor.publications.publicationType.review', value: 'review' },
            { label: 'editor.publications.publicationType.editorial', value: 'editorial' },
            { label: 'editor.publications.publicationType.letter', value: 'letter' },
            { label: 'editor.publications.publicationType.news', value: 'news' },
            { label: 'editor.publications.publicationType.magazineArticle', value: 'magazineArticle' },
            { label: 'editor.publications.publicationType.technicalNote', value: 'technicalNote' },
            { label: 'editor.publications.publicationType.commentary', value: 'commentary' },
            { label: 'editor.publications.publicationType.bookChapter', value: 'bookChapter' },
            { label: 'editor.publications.publicationType.caseReport', value: 'caseReport' },
            { label: 'editor.publications.publicationType.proceedingsPaper', value: 'proceedingsPaper' },
            { label: 'editor.publications.publicationType.monograph', value: 'monograph' },
            { label: 'editor.publications.publicationType.patent', value: 'patent' },
            { label: 'editor.publications.publicationType.standard', value: 'standard' },
            { label: 'editor.publications.publicationType.dataset', value: 'dataset' },
            { label: 'editor.publications.publicationType.software', value: 'software' },
            { label: 'editor.publications.publicationType.website', value: 'website' },
            { label: 'editor.publications.publicationType.blogPost', value: 'blogPost' },
            { label: 'editor.publications.publicationType.translation', value: 'translation' },
            { label: 'editor.publications.publicationType.video', value: 'video' },
            { label: 'editor.publications.publicationType.audio', value: 'audio' }
          ]
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
