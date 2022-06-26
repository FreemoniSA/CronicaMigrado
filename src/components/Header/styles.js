import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerHeader: {
    // backgroundColor: THEME.colors.red,
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
    fontSize: THEME.fontSize.subheading,
    paddingLeft: 8,
    fontFamily:THEME.fontFamily.mainBold
  },
  containerCronipesosEnabled: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    minHeight:90
  },
  textCronipesos: {
    textAlign: "center",
    color: THEME.colors.white,
    fontFamily:THEME.fontFamily.mainBold
  },
  balance: {
    fontSize: 30,
  },
  textUserRole: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize:THEME.fontSize.description,
    fontFamily:THEME.fontFamily.secondaryBold
  },
  textUserRoleColor:{
    backgroundColor: THEME.colors.darkred,
  }
});

export default styles;
