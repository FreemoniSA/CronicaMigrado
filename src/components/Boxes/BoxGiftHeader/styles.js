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
    fontSize: 18,
    fontFamily:THEME.fontFamily.mainBold
  },
  storeType: {
    fontSize: THEME.fontSize.subheading,
    color: THEME.colors.darkgray,
    fontFamily:THEME.fontFamily.mainRegular
  },
  themeBlack: {
    color: THEME.colors.white,
  },
  noMoreCoupons:{
    paddingTop:8,
    fontSize: THEME.fontSize.description,
    color: THEME.colors.darkgray,
    fontFamily:THEME.fontFamily.mainRegular
  }
});
export default styles;
