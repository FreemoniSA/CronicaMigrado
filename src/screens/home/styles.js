import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  popUpContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  popUpHeader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    zIndex: 99,
  },
  popUpImage: {
    width: Dimensions.get("window").width * 0.9,
    height: 100,
  },
  popUpTitle: {
    fontSize: THEME.fontSize.heading,
    textAlign: "center",
    fontWeight: "700",
    color: THEME.colors.blackCronica,
    paddingVertical: 10,
  },
  popUpParagraph: {
    fontSize: 13,
    textAlign: "center",
    color: THEME.colors.darkgray,
    paddingVertical: 10,
  },
});

export default styles;
