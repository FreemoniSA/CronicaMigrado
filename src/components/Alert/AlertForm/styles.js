import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
  title: {
    fontFamily: THEME.fontFamily.mainBold,
    textAlign: "center",
    fontSize: THEME.fontSize.heading,
  },
  desc: {
    fontFamily: THEME.fontFamily.mainRegular,
    fontSize: THEME.fontSize.subheading,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    color: THEME.colors.red,
    fontFamily: THEME.fontFamily.mainBold,
  },
  acceptButton: {
    backgroundColor: THEME.colors.red,
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.white,
    padding: 6,
    borderRadius: 5,
    marginLeft: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: THEME.colors.lightgray,
    marginBottom: 20,
  },
});
export default styles;
