import "react-native-gesture-handler";
import React from "react";
import MainTab from "./navigation/mainTabNav";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./components/main";
import MainStack from "./navigation/mainStackNav";

export default function App() {
  return (
    <PaperProvider>
      {/* <Main /> */}
      <MainStack />
    </PaperProvider>
  );
}
