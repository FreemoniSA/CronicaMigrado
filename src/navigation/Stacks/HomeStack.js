import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import Notifications from "../../screens/notifications";
import HeaderHome from "../../components/Header/HeaderHome";
import { getHeaderTitle } from "@react-navigation/elements";
import HeaderDefault from "../../components/Header/HeaderDefault";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{
          title: "Hola, Marcos",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <HeaderHome
                title={title}
                style={options.headerStyle}
                navigation={navigation}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Notificaciones"
        component={Notifications}
        options={{
          title: "Notificaciones",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <HeaderDefault
                title={title}
                style={options.headerStyle}
                navigation={navigation}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
