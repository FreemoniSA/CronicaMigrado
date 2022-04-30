import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  containerUserData: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 20,
  },
  userDataTextName: {
    color: THEME.colors.black,
    fontSize: THEME.fontSize.heading,
    fontWeight: "700",
  },
  userDataText: {
    color: THEME.colors.darkgray,
    fontSize: THEME.fontSize.subheading,
  },
  containerUserCode: {
    marginTop:40,
    marginBottom:20,
    borderBottomColor:THEME.colors.lightgray,
    borderBottomWidth:2,
    width:"100%"
  },
  userCodeTitle: {
    textAlign: "center",
    color: THEME.colors.black,
    fontSize: THEME.fontSize.subheading,
    fontWeight: "700",
  },
  userCodeSubheading: {
    lineHeight: 20,
    textAlign: "center",
    color: THEME.colors.darkgray,
    fontSize: THEME.fontSize.description,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical:10
  },
  codeText: {
    color: THEME.colors.darkgray,
    fontSize: 30,
  },
  iconHelp:{
    alignSelf:"center",
    paddingVertical:10
  },
  titleBlack: {
    textAlign: "center",
    color: THEME.colors.black,
    fontSize: THEME.fontSize.subheading,
    fontWeight: "700",
  },
  stepsBlack: {
    lineHeight: 20,
    textAlign: "center",
    color: THEME.colors.darkgray,
    fontSize: THEME.fontSize.description,
  },
});

export default styles;
