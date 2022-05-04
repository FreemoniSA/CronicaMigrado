import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import THEME, {
  APP_THEME_CLASSIC,
  APP_THEME_BLACK,
} from "../utils/constants/theme";
import MyDrawer from "./Drawer";
import { AuthStack } from "./Stacks";
import * as firebase from "firebase";
import useAppContext from "../context/useAppContext";
import useGetUserRole from "../hooks/useGetUserRole";
const Navigator = () => {
  const [isLogged, setIsLogged] = useState(true);
  const role = useGetUserRole();
  // const { user } = useAppContext()
  return (
    <>
      <StatusBar backgroundColor={THEME.colors.black} />
      <NavigationContainer
        theme={role === "classic" ? APP_THEME_CLASSIC : APP_THEME_BLACK}
      >
        {isLogged ? <MyDrawer /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default Navigator;
