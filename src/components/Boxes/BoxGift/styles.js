import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    paddingVertical:20,
    paddingHorizontal:10,
  },
  store:{
    fontSize:THEME.fontSize.subheading,
    fontFamily:THEME.fontFamily.mainRegular
  },
  storeType:{
    fontSize:THEME.fontSize.description,
    color:THEME.colors.darkgray,
    fontFamily:THEME.fontFamily.mainRegular
  },
  balance:{
    textAlign:"right",
    fontSize:THEME.fontSize.subheading,
    fontFamily:THEME.fontFamily.mainRegular
  },
  minAmount:{
    fontSize:THEME.fontSize.description,
    color:THEME.colors.darkgray,
    textAlign:"right",
    fontFamily:THEME.fontFamily.mainRegular
  },
  separator:{
      borderColor:THEME.colors.lightgray,
      borderWidth:1
  },
  themeBlack:{
    color:THEME.colors.white
  }
});
export default styles;
