import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerFramer: {
    width: THEME.width.default,
    backgroundColor: THEME.colors.white,
    marginVertical: 8,
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerTitle: {
    borderBottomColor: THEME.colors.lightgray,
    borderBottomWidth: 1,
    paddingHorizontal:5,
  },
  greatPadding:{
    paddingVertical:15
  },
  textTitle: {
    color: THEME.colors.darkgray,
    fontSize: THEME.fontSize.subheading,
    paddingBottom: 5,
    fontWeight: "600",
  },
  containerFooter: {
    borderTopColor: THEME.colors.lightgray,
    borderTopWidth: 1,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    paddingTop:5,
    paddingHorizontal:5,
  },
  textFooter: {
    color: THEME.colors.red,
    fontSize: THEME.fontSize.subheading,
    fontWeight: "600",
    
  },
});
export default styles;
