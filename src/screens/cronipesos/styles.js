import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: "center",
    backgroundColor:THEME.colors.white,
    paddingVertical:10,
    justifyContent:"flex-start",
  },
  titleBlackContainer:{
      paddingVertical:10,
      paddingHorizontal:10,
      width:"100%"
  },
  titleBlack:{
      fontSize:THEME.fontSize.subheading,
      fontWeight:"700",
  },
  containerBlack:{
    paddingBottom:20
  },
  containerClassic:{
    paddingVertical:20
  }
});
export default styles;
