import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../../screens/transactions";
const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Transactions} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
