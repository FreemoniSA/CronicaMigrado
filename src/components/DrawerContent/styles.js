import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: "space-between",
  },
  img: {
    width: Dimensions.get("window").width * 0.78,
    height: Dimensions.get("window").width * 0.78 * 0.5625,
  },
  footerItemContainer: {
    borderColor: "transparent",
    borderTopColor: "#adadad99",
    borderWidth: 1,
    padding: 10,
  },
  footerItem: {
    fontSize: 13,
    color: "#5E5C5C",
    paddingRight: 10,
    fontFamily:THEME.fontFamily.mainRegular,
  },
  powerBy: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareButtonText:{
    fontSize: 16,
    color: THEME.colors.blackCronica,
    paddingLeft:40,
    fontFamily:THEME.fontFamily.mainRegular,
  }
});

export default styles;
