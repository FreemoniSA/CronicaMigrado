const THEME = {
  colors: {
    red: "#F40000",
    darkred: "#BB050599",
    black: "#101010",
    darkgray: "#5E5C5C",
    lightgray: "#E3DDDD",
    white: "#ffffff",
    green: "#44b16e",
    creamwhite:"#f5f5f5"
  },
  fontSize: {
    heading: 18,
    subheading: 16,
    description:10
  },
};

export const APP_THEME_BLACK = {
  dark: true,
  colors: {
    primary: THEME.colors.white,
    background: THEME.colors.creamwhite,
    card: THEME.colors.black,
    text: THEME.colors.white,
    border: THEME.colors.white,
    notification: THEME.colors.white,
  },
};

export const APP_THEME_CLASSIC = {
  dark: false,
  colors: {
    primary: THEME.colors.white,
    background: THEME.colors.creamwhite,
    card: THEME.colors.red,
    text: THEME.colors.white,
    border: THEME.colors.white,
    notification: THEME.colors.white,
  },
};

export default THEME;
