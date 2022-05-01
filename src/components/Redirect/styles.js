import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor:THEME.colors.white,
    borderBottomColor:THEME.colors.lightgray,
    borderBottomWidth:1,
    padding:12,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  buttonText:{
      color:THEME.colors.black
  }
});
export default styles;
