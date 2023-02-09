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
          label: "editor.profile.master",
          value: "master",
          type: "selector"
        },
        {
          label: "editor.experiences.period",
          value: "period",
          type: "dataRange"
        }
      ]
    }
  ]
}
