import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home"
import Notifications from "../../screens/notifications";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Inicio" component={Home} />
      <Stack.Screen name="Notificaciones" component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeStack;
