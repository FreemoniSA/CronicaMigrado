import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
const BottomTabsHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.jumpTo("Transactions")}
      >
        <Ionicons name="swap-horizontal" size={35} color={THEME.colors.red} />
      </TouchableWithoutFeedback>
      <Ionicons name="gift-outline" size={35} color={THEME.colors.red} />
    </View>
  );
};

export default BottomTabsHome;
