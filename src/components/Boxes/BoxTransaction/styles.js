import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 16,
    fontFamily:THEME.fontFamily.mainRegular
  },
  date: {
    fontSize: 13,
    color: THEME.colors.darkgray,
    fontFamily:THEME.fontFamily.mainRegular,
    paddingTop:2
  },
  balance: {
    fontSize: THEME.fontSize.subheading,
    alignSelf: "center",
    color: THEME.colors.blackCronica,
    padding: 5,
    borderRadius: 5,
    fontFamily:THEME.fontFamily.mainRegular,
  },
  greenBalance: {
    backgroundColor: "#ddf7de",
    color: THEME.colors.green,
  },
  separator: {
    borderColor: THEME.colors.lightgray,
    borderWidth: 1,
  },
});
export default styles;
