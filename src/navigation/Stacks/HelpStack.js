import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Help from "../../screens/help"
const Stack = createStackNavigator();

const HelpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Ayuda" component={Help} options={{ title: "Ayuda" }} />
    </Stack.Navigator>
  );
};

export default HelpStack;