import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:THEME.colors.creamwhite,
    paddingVertical:10,
    justifyContent:"center",
  },
});

export default styles;