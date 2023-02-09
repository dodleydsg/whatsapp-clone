import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MainStack from "./navigation/mainStackNav";
import MainStack from "./routes/Main.stack";

export default function App() {
  return (
    <PaperProvider>
      <MainStack />
    </PaperProvider>
  );
}
