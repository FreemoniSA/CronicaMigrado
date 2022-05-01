import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import styles from "./styles";
const Redirect = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
        <Ionicons
          name="chevron-forward-outline"
          color={THEME.colors.darkgray}
          size={24}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Redirect;
