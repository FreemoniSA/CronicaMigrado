import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Help from "../../screens/help";
import HeaderDefault from "../../components/Header/HeaderDefault";
import { getHeaderTitle } from "@react-navigation/elements";
import Onboarding from "../../components/Onboarding";
import FrequentQuestions from "../../screens/help/FrequentQuestions";
const Stack = createStackNavigator();

const HelpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
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
        <Stack.Screen
          name="Preguntas frecuentes"
          component={FrequentQuestions}
          options={{
            title: "Preguntas frecuentes",
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
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HelpStack;
