import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import cronicaDrawer from "../../../assets/club-cronica.png";
import freemoniLogo from "../../../assets/logo-home-2.png";
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Button from "../Button";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <View style={styles.container}>
        <View>
          <Image source={cronicaDrawer} style={styles.img} />
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
            <Button text="Cerrar sesión" color="red" />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
