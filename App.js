import React from "react";
import "react-native-gesture-handler";
import { AppContextProvider } from "./src/context/useAppContext";

import Navigator from "./src/navigation";
export default function App() {
  return (
    <AppContextProvider>
      <Navigator />
    </AppContextProvider>
  );
}
