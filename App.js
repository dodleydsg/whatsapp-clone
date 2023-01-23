import React from "react";
import MainTab from "./navigation/mainTabNav";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./components/main";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </NavigationContainer>
  );
}
