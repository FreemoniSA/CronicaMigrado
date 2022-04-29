import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/profile"

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Perfil" component={Profile} options={{ title: "Perfil" }} />
    </Stack.Navigator>
  );
};

export default ProfileStack;