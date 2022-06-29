import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.colors.white,
    paddingVertical: 10,
    justifyContent: "center",
  },
});

export default styles;
