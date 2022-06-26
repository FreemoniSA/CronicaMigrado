import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  small: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  medium: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  rectangle: {
    width: Dimensions.get("window").width * 0.89,
    height: 160,
  },
});

export default styles;
