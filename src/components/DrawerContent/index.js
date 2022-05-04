import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import cronicaDrawer from "../../../assets/club-cronica.png";
import cronicaDrawerBlack from "../../../assets/club-cronica-black.png";
import freemoniLogo from "../../../assets/logo-home-2.png";
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Button from "../Button";
import { closeSession } from "../../utils/actions";
import useGetUserRole from "../../hooks/useGetUserRole";
const CustomDrawerContent = (props) => {
  const role = useGetUserRole();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={role === "classic" ? cronicaDrawer : cronicaDrawerBlack}
            style={styles.img}
          />
          <DrawerItemList {...props} />
        </View>
        <View>
          <View style={[styles.footerItemContainer, styles.powerBy]}>
            <Text style={styles.footerItem}>Powered by</Text>
            <Image source={freemoniLogo} />
          </View>
          <View style={styles.footerItemContainer}>
            <Text style={styles.footerItem}>Version 1.2.9</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <Button
              text="Cerrar sesión"
              color={role === "classic" ? "red" : "blackCronica"}
              onPress={() => closeSession()}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
