import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header(props) {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Appbar.Header statusBarHeight={0} style={{ backgroundColor: "red" }}>
          <Appbar.Content title="WhatsApp" />
          <Appbar.Action icon="camera-outline" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
      </SafeAreaView>
    </PaperProvider>
  );
}
