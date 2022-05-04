import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: THEME.fontSize.title,
    color: THEME.colors.black,
    fontWeight: "600",
    paddingVertical:1
  },
  desc: {
    fontSize: THEME.fontSize.description,
    color: THEME.colors.black,
    paddingVertical:1
  },
  date: {
    fontSize: THEME.fontSize.description,
    color: THEME.colors.darkgray,
    paddingVertical:2
  },
  balance: {
    fontSize: THEME.fontSize.subheading,
    alignSelf: "center",
    backgroundColor: "#ddf7de",
    color: THEME.colors.green,
    padding: 5,
    borderRadius: 5,
  },
  separator: {
    borderColor: THEME.colors.lightgray,
    borderWidth: 1,
  },
});
export default styles;
