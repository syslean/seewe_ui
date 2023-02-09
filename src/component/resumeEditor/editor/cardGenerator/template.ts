export const template = {
  name: "Resume",
  modules: [
    {
      storeKey: "profile",
      label: "editor.profile.key",
      type: "",
      fields: [
        {
          label: "editor.profile.name",
          value: "name",
          type: "text"
        },
        {
          label: "editor.profile.about",
          value: "about",
          type: "area"
        },
        {
          label: "editor.publications.publishedAt",
          value: "publishedAt",
          type: "date"
        },
        {
          label: "editor.educations.degree",
          value: "degree",
          type: "selector",
          options: [
            {label: "editor.educations.degreeType.associate", value: "associate"},
            {label: "editor.educations.degreeType.bachelor", value: "bachelor"},
            {label: "editor.educations.degreeType.master", value: "master"},
            {label: "editor.educations.degreeType.doctor", value: "doctor"}
          ]
        },
        {
          label: "editor.experiences.period",
          value: "period",
          type: "dateRange"
        }
      ]
    }
  ]
}
