import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gifts from "../../screens/gifts"
const Stack = createStackNavigator();

const GiftsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Regalos" component={Gifts} options={{ title: "Regalos" }} />
    </Stack.Navigator>
  );
};

export default GiftsStack;