import React from "react";
import "react-native-gesture-handler";
import { AppContextProvider } from "./src/context/useAppContext";
import Navigator from "./src/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </AppContextProvider>
  );
}
