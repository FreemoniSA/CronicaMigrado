import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center"
    },
    modalContainer:{
        width:"90%",
        backgroundColor:THEME.colors.white,
        paddingHorizontal:20,
        borderRadius:5,
        elevation:20,
        overflow:"hidden"
    },
})
export default styles;