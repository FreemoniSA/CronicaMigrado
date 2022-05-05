import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gifts from "../../screens/gifts";
import HeaderDefault from "../../components/Header/HeaderDefault";
import { getHeaderTitle } from "@react-navigation/elements";
import Modal from "../../components/Modal";
const Stack = createStackNavigator();

const GiftsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Regalos"
          component={Gifts}
          options={{
            title: "Regalos",
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
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", headerShown:false }}>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default GiftsStack;
