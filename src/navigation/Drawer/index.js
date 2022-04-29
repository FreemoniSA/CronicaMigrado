import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicon from "react-native-vector-icons/Ionicons";
import CustomDrawerContent from "../../components/DrawerContent";
import THEME from "../../utils/constants/theme";
import {
  GiftsStack,
  HelpStack,
  HomeStack,
  ProfileStack,
  TransactionStack,
} from "../Stacks";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: THEME.colors.white,
        drawerActiveTintColor: THEME.colors.darkred,
        drawerInactiveTintColor:THEME.colors.black,
        drawerInactiveBackgroundColor:  THEME.colors.white,
        drawerStyle: {
          width: Dimensions.get("window").width * 0.78,
          backgroundColor:"#ffffff"
        },
        drawerLabelStyle: {
          fontSize: THEME.fontSize.subheading,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Hola, Marcos",
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="home-outline" size={28} color={THEME.colors.darkred} />
          ),
          drawerLabel:"Inicio"
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: "Perfil",
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="person-outline" size={28} color={THEME.colors.darkred} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gifts"
        component={GiftsStack}
        options={{
          title: "Regalos",
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="gift-outline" size={28} color={THEME.colors.darkred} />
          ),
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionStack}
        options={{
          title: "Transacciones",
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="swap-horizontal-outline" size={28} color={THEME.colors.darkred} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpStack}
        options={{
          title: "Ayuda",
          drawerIcon: ({ focused, size }) => (
            <Ionicon name="help-circle-outline" size={28} color={THEME.colors.darkred} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
