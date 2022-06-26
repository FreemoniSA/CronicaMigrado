import { Dimensions } from "react-native";
const THEME = {
  colors: {
    red: "#F40000",
    darkred: "#BB050599",
    black: "#101010",
    darkgray: "#5E5C5C",
    lightgray: "#E3DDDD99",
    white: "#ffffff",
    green: "#44b16e",
    creamwhite: "#f5f5f5",
    blackCronica: "#202020",
    blue: "#39548b",
  },
  fontSize: {
    heading: 18,
    subheading: 16,
    title: 13,
    description: 10,
  },
  fontFamily: {
    mainRegular: "Montserrat_500Medium",
    mainBold: "Montserrat_700Bold",
    secondaryRegular: "PTSans_400Regular",
    secondaryBold: "PTSans_700Bold",
  },
  width: {
    default: Dimensions.get("window").width * 0.95,
    fullWidth: "100%",
  },
};

export const APP_THEME_BLACK = {
  dark: true,
  colors: {
    primary: THEME.colors.white,
    background: THEME.colors.creamwhite,
    card: THEME.colors.blackCronica,
    text: THEME.colors.blackCronica,
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
    text: THEME.colors.red,
    border: THEME.colors.white,
    notification: THEME.colors.white,
  },
};

export default THEME;
