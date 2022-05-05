import React from "react";
import THEME from "../../utils/constants/theme";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
const Button = ({ text, color, onPress, margin }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, styles[color], margin && styles.margin]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
