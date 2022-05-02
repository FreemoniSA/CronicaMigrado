import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Help from "../../screens/help";
import HeaderDefault from "../../components/Header/HeaderDefault";
import { getHeaderTitle } from "@react-navigation/elements";
const Stack = createStackNavigator();

const HelpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ayuda"
        component={Help}
        options={{
          title: "Ayuda",
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

export default HelpStack;
