import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../../screens/signup";
import Login from "../../screens/login";
import RecoverPassword from "../../screens/recover-password";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Logearse",
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Registrarse",
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Recover-password"
        component={RecoverPassword}
        options={{
          title: "Recuperar contraseña",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
