import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import useGetUserRole from "../../hooks/useGetUserRole";
import { useTheme } from "@react-navigation/native";
const HeaderHome = ({ title, navigation, route }) => {
  const role = useGetUserRole();
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.card, padding: 12 }}>
      <View style={styles.containerAppHeader}>
        <View style={styles.containerWelcomeHeader}>
          <Ionicon
            name="menu-outline"
            size={32}
            color={THEME.colors.white}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.textWelcomeHeader}>{title}</Text>
        </View>
        <View>
          <Ionicon
            name="notifications-outline"
            size={30}
            color={THEME.colors.white}
            onPress={() => navigation.navigate("Notificaciones")}
          />
        </View>
      </View>
      <View style={styles.containerCronipesosEnabled}>
        <Text style={[styles.textCronipesos, styles.balance]}>
          C$<Text style={{ fontSize: 40, fontWeight: "700" }}>2500</Text>
        </Text>
        <Text
          style={[
            styles.textCronipesos,
            styles.textUserRole,
            role === "classic" && styles.textUserRoleColor,
          ]}
        >
          CRONIPESOS - SOCIO CLASSIC
        </Text>
      </View>
    </View>
  );
};

export default HeaderHome;
