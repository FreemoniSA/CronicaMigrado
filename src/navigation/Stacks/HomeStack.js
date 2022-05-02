import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import Notifications from "../../screens/notifications";
import HeaderHome from "../../components/Header/HeaderHome";
import { getHeaderTitle } from "@react-navigation/elements";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{
          title:"Hola, Marcos",
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
      <Stack.Screen name="Notificaciones" component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeStack;
