import React, { useState, useRef } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { StatusBar, SafeAreaView } from "react-native";
import THEME, {
  APP_THEME_CLASSIC,
  APP_THEME_BLACK,
} from "../utils/constants/theme";
import MyDrawer from "./Drawer";
import { AuthStack } from "./Stacks";
import useAppContext from "../context/useAppContext";
import useGetUserRole from "../hooks/useGetUserRole";
// import * as Analytics from "expo-firebase-analytics";
import analytics from "@react-native-firebase/analytics";

const Navigator = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const role = useGetUserRole();
  const { user, register } = useAppContext();
  if (!user || !register) {
    return (
      <>
        <StatusBar backgroundColor={THEME.colors.black} />
        <NavigationContainer
          theme={role === "classic" ? APP_THEME_CLASSIC : APP_THEME_BLACK}
        >
          <AuthStack />
        </NavigationContainer>
      </>
    );
  }
  return (
    <>
      <StatusBar backgroundColor={THEME.colors.black} />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logEvent("screenView", {
              currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}
        theme={role === "classic" ? APP_THEME_CLASSIC : APP_THEME_BLACK}
      >
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default Navigator;
