import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.creamwhite,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  closeContainer: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  cronipesosTextContainer: {
    marginVertical: 15,
    color: THEME.colors.black,
  },
  cronipesosText: {
    fontSize: THEME.fontSize.heading,
    color: THEME.colors.black,
    fontFamily: THEME.fontFamily.mainBold,
  },
});

export default styles;
