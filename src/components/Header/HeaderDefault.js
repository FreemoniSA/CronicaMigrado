import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
const HeaderDefault = ({ title, navigation }) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor:colors.card, padding:12, paddingTop: insets.top + 12 }}>
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
