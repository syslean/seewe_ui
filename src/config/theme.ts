const FONT_CONFIG = {
  fontFamily: '"Open Sans", serif',
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: 2,
  colorText: "rgba(0, 0, 0, 0.65)"
}

const ANT_THEME_CONFIG = {
  components: {
    Input: {
      ...FONT_CONFIG
    },
    DatePicker: {
      ...FONT_CONFIG
    },
    Select: {
      ...FONT_CONFIG
    }
  }
}

export default ANT_THEME_CONFIG;
