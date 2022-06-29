import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import useGetUserRole from "../../hooks/useGetUserRole";
import { useTheme } from "@react-navigation/native";
import {
  getAccountData,
  getDataUser,
  updateNotifications,
} from "../../services";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const HeaderHome = ({ title, navigation, route }) => {
  const insets = useSafeAreaInsets();
  const role = useGetUserRole();
  const { colors } = useTheme();
  const { user } = useAppContext();
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );
  const { data: dataAccount, refetch: refetchDataAccount } = useQuery(
    ["dataAccount", dataUser],
    () => getAccountData(dataUser),
    { enabled: !!dataUser }
  );

  const onNotificationsHandle = async () => {
    navigation.navigate("Notificaciones");
    await updateNotifications();
  };

  useRefreshOnFocus(refetchDataUser);
  useRefreshOnFocus(refetchDataAccount);
  return (
    <View
      style={{
        backgroundColor: colors.card,
        padding: 12,
        paddingTop: insets.top + 12,
      }}
    >
      <View style={styles.containerAppHeader}>
        <View style={styles.containerWelcomeHeader}>
          <Ionicon
            name="menu-outline"
            size={32}
            color={THEME.colors.white}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.textWelcomeHeader}>
            Hola, {dataUser?.displayName}
          </Text>
        </View>
        <View>
          <Ionicon
            name={
              !dataUser?.notificationReadingDate
                ? "notifications"
                : "notifications-outline"
            }
            size={30}
            color={THEME.colors.white}
            onPress={onNotificationsHandle}
          />
        </View>
      </View>
      <View style={styles.containerCronipesosEnabled}>
        {dataAccount && dataAccount.length > 0 && (
          <>
            <Text style={[styles.textCronipesos, styles.balance]}>
              C$
              <Text style={{ fontSize: 40, fontWeight: "700" }}>
                {dataAccount &&
                  dataAccount.length > 0 &&
                  dataAccount[0].availableBalance}
              </Text>
            </Text>
            <Text style={[styles.textCronipesos, styles.textUserRole]}>
              CRONIPESOS - SOCIO CLASSIC
            </Text>
          </>
        )}
        {!dataAccount && <ActivityIndicator size="large" color="#fff" />}
      </View>
    </View>
  );
};

export default HeaderHome;
