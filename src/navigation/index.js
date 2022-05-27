import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, SafeAreaView } from "react-native";
import THEME, {
  APP_THEME_CLASSIC,
  APP_THEME_BLACK,
} from "../utils/constants/theme";
import MyDrawer from "./Drawer";
import { AuthStack } from "./Stacks";
import useAppContext from "../context/useAppContext";
import useGetUserRole from "../hooks/useGetUserRole";
const Navigator = () => {
  //const [isLogged, setIsLogged] = useState(false);
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
        theme={role === "classic" ? APP_THEME_CLASSIC : APP_THEME_BLACK}
      >
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default Navigator;
