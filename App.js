import React from "react";
import "react-native-gesture-handler";
import { AppContextProvider } from "./src/context/useAppContext";
import Navigator from "./src/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from "@expo-google-fonts/pt-sans";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import registerNNPushToken from 'native-notify';
export const queryClient = new QueryClient();

export default function App() {
  //registerNNPushToken(3111, '8JYg5hGeDI5LcmdCXv9VSy');
  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <AppContextProvider>
          <QueryClientProvider client={queryClient}>
            <Navigator />
          </QueryClientProvider>
        </AppContextProvider>
      </SafeAreaProvider>
    );
  }
}
