import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../../screens/transactions";
import { getHeaderTitle } from "@react-navigation/elements";
import HeaderDefault from "../../components/Header/HeaderDefault";
import Modal from "../../components/Modal";
const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Transacciones"
          component={Transactions}
          options={{
            title: "Transacciones",
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
      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TransactionStack;
