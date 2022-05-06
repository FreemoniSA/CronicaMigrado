import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  red: {
    backgroundColor: THEME.colors.red,
  },
  blue: {
    backgroundColor: THEME.colors.blue,
  },
  black: {
    backgroundColor: THEME.colors.black,
  },
  blackCronica:{
    backgroundColor: THEME.colors.blackCronica
  },
  green: {
    backgroundColor: THEME.colors.green,
  },
  margin:{
    marginVertical:7
  }
});

export default styles;
