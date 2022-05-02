import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
const HeaderDefault = ({ title, navigation }) => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerAppHeader}>
        <View style={styles.containerWelcomeHeader}>
          <Ionicon
            name="arrow-back-outline"
            size={32}
            color={THEME.colors.white}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.textWelcomeHeader}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderDefault;
