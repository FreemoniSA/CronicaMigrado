import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: THEME.colors.red,
    padding: 12,
  },
  containerAppHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerWelcomeHeader: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: Dimensions.get("window").width * 0.7,
    flexWrap: "wrap",
  },
  textWelcomeHeader: {
    color: THEME.colors.white,
    fontSize: THEME.fontSize.heading,
    paddingLeft: 8,
    fontWeight: "700",
  },
  containerCronipesosEnabled: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  textCronipesos: {
    textAlign: "center",
    color: THEME.colors.white,
  },
  balance: {
    fontSize: 30,
  },
  textUserRole: {
    backgroundColor: THEME.colors.darkred,
    paddingHorizontal: 10,
  },
});

export default styles;
