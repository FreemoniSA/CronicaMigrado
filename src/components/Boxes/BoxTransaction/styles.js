import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 12,
  },
  date: {
    fontSize: THEME.fontSize.description,
    color: THEME.colors.darkgray,
  },
  balance: {
    fontSize: THEME.fontSize.subheading,
    alignSelf: "center",
    color: THEME.colors.blackCronica,
    padding: 5,
    borderRadius: 5,
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
