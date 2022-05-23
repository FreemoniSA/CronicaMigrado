import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 30,
    width: "100%",
    backgroundColor: THEME.colors.creamwhite,
  },
  inputComponent:{
      width:"100%",
      alignItems: "center",
      marginVertical: 5,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: THEME.colors.white,
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent:"space-between",
    width: "90%",
    alignItems:"center",
    flexDirection:"row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textInput: {
    height: 60,
    width:"80%",
    fontSize: THEME.fontSize.subheading,
  },
  errorContainer:{
    paddingTop:3
  },
  textError:{
    color:THEME.colors.red
  },
  btnContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius:50,
  },
  btn: {
    backgroundColor: THEME.colors.black,
    
  },
  icon: {
    color: "#c1c1c1",
  },
  btnGoogle: {
    backgroundColor: "#EA4335",
  },
  accountExistContainer:{
    width:"90%",
    alignSelf:"center",
    marginTop:15
  },
  accountExistText:{
    textAlign:"center"
  },
  accountExistTextHighlighted:{
    color: THEME.colors.red,
    textAlign: "center",
    fontWeight: "700",
  }
});
export default styles;
