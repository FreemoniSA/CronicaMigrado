import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  questionTextContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: THEME.fontSize.subheading,
    fontFamily: THEME.fontFamily.mainRegular,
  },
  listContainer: {
    paddingHorizontal: 12,
  },
  listTextContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  listTextIdx: {
    fontSize: 12,
    fontWeight: "700",
  },
  listText: {
    fontSize: 12,
    fontFamily: THEME.fontFamily.mainRegular,
  },
});
export default styles;
