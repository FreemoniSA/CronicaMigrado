import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import THEME, { APP_THEME_CLASSIC } from "../utils/constants/theme";
import MyDrawer from "./Drawer";

const Navigator = () => {
  return (
    <>
      <StatusBar backgroundColor={THEME.colors.black} />
      <NavigationContainer theme={APP_THEME_CLASSIC}>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default Navigator;
