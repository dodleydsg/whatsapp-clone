import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MainStack from "./navigation/mainStackNav";

export default function App() {
  return (
    <PaperProvider>
      {/* <Main /> */}
      <MainStack />
    </PaperProvider>
  );
}
