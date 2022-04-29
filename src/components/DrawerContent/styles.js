import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
      height:Dimensions.get("window").height,
      flex:1,
      justifyContent:"space-between",
  },
  img: {
    width: Dimensions.get("window").width * 0.78,
    height: Dimensions.get("window").width * 0.78 * 0.5625,
  },
  footerItemContainer:{
    borderColor:"transparent",
    borderTopColor:"#adadad99",
    borderWidth:1,
    padding:10,
  },
  footerItem:{
      fontSize:16,
      color:"#5E5C5C",
      paddingRight:10
  },
  powerBy:{
    flexDirection:"row",
    alignItems:"center"
  }
});

export default styles;
