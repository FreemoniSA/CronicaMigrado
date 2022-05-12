import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  store: {
    fontSize: 15,
    fontWeight:"300"
  },
  storeType: {
    fontSize: THEME.fontSize.description,
    color: THEME.colors.darkgray,
  },
  themeBlack: {
    color: THEME.colors.white,
  },
});
export default styles;
