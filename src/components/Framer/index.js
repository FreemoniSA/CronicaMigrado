import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
const Framer = ({ title, footer, children, greatPadding }) => {
  return (
    <View style={styles.containerFramer}>
      <View style={[styles.containerTitle, greatPadding && styles.greatPadding]}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View>{children}</View>
      {footer && (
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>{footer}</Text>
          <Ionicon
            name="chevron-forward-outline"
            size={28}
            color={THEME.colors.red}
          />
        </View>
      )}
    </View>
  );
};

export default Framer;
