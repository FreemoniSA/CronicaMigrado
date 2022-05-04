import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    paddingVertical:20,
    paddingHorizontal:10,
  },
  store:{
    fontSize:THEME.fontSize.subheading
  },
  storeType:{
    fontSize:THEME.fontSize.description,
    color:THEME.colors.darkgray
  },
  balance:{
    textAlign:"right",
    fontSize:THEME.fontSize.subheading
  },
  minAmount:{
    fontSize:THEME.fontSize.description,
    color:THEME.colors.darkgray,
    textAlign:"right"
  },
  separator:{
      borderColor:THEME.colors.lightgray,
      borderWidth:1
  }
});
export default styles;
