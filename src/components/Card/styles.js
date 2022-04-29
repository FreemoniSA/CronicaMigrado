import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  horizontal:{
    flexDirection:"row",
    alignItems:"center"
  },
  description:{
      textAlign:"center",
      color:THEME.colors.darkgray
  }
});

export default styles;
