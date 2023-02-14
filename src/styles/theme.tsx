const commonStyles = {
  borderRadius: {
    md: "1.25rem",
    lg: "3.125rem",
  },
}

const dark = {
  ...commonStyles,
  backgroundColor: {
    primary: "#212121",
    secondary: "#E63A23",
    tertiary: "#353535",
  },
  textColor: {
    title: "#E63A23",
    paragraph: "#afafaf",
    subtitle: "#ddd",
  },
}

const light = {
  ...commonStyles,
  backgroundColor: {
    primary: "#ffffff",
    secondary: "#E63A23",
    tertiary: "#EFEFEF",
  },
  textColor: {
    title: "#E63A23",
    paragraph: "#858585",
    subtitle: "#212121",
  },
}

export default { dark, light }