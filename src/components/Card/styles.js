import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.white,
    padding: 8,
  },
  white: {
    backgroundColor: THEME.colors.white,
  },
  black: {
    backgroundColor: THEME.colors.blackCronica,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  borderRound: {
    borderRadius: 10,
  },
  description: {
    fontSize: THEME.fontSize.description,
    textAlign: "center",
    color: THEME.colors.darkgray,
  },
  fullWidth: {
    width: THEME.width.fullWidth,
  },
  widthWithMinimunMargin: {
    width: THEME.width.default,
  },
});

export default styles;
