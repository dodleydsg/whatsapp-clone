import React from "react";
import MainTab from "./navigation/mainTabNav";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <PaperProvider>
      <MainTab />
    </PaperProvider>
  );
}
