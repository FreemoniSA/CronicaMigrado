import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.creamwhite,
    paddingVertical:20,
    paddingHorizontal:10,
    alignItems:"center"
  },
  closeContainer: {
    alignSelf: "flex-end",
    marginBottom:10
  },
  cronipesosTextContainer:{
      marginVertical:20,
      color: THEME.colors.black,
  },
  cronipesosText:{
      fontSize:THEME.fontSize.heading,
      fontWeight:"700",
      color: THEME.colors.black,
    
  }
});

export default styles;
