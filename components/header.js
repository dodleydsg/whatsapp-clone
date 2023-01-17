import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "../navigation/mainTabNav";

export default function Header({ theme }) {
  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <NavigationContainer>
        <Appbar.Header style={{ backgroundColor: "green" }} statusBarHeight={0}>
          <Appbar.Content title="WhatsApp" />
          <Appbar.Action icon="camera-outline" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <MainTab
          tabBarStyle={{
            backgroundColor: "green",
            flex: 0,
          }}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
}

