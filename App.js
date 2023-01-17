import React from "react";
import MainTab from "./navigation/mainTabNav";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/header";

export default function App() {
  return (
    <PaperProvider>
      <Header />
    </PaperProvider>
  );
}
