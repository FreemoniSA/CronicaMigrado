import React from "react";
import { Text, View, Platform } from "react-native";
import "react-native-gesture-handler";
import { AppContextProvider } from "./src/context/useAppContext";
import Navigator from "./src/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  console.log(Platform.OS)
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </AppContextProvider>
  );
}
