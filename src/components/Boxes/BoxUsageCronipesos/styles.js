import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:20
    },
    questionTextContainer:{
        marginBottom:20
    },
    questionText:{
        fontSize:THEME.fontSize.heading,
        fontWeight:"700"
    },
    listContainer:{
        paddingHorizontal:15
    },
    listTextContainer:{
        flexDirection:"row",
        marginBottom:15,
        alignItems:"flex-start"
    },
    listTextIdx:{
        fontWeight:"700"
    },
    listText:{
        fontSize:THEME.fontSize.subheading,
        lineHeight:23
    }
})
export default styles;