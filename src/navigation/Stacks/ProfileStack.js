import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/profile";
import HeaderDefault from "../../components/Header/HeaderDefault";
import { getHeaderTitle } from "@react-navigation/elements";
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{
          title: "Perfil",
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

export default ProfileStack;
