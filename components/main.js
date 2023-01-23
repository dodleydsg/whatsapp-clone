import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MainTab from "../navigation/mainTabNav";
import ActionFab from "./shared/actionFab";

export default function Main({ theme }) {
  //check current screen from navigation and render appropriate header

  const MenuOptions = () => {
    switch ("") {
      case "page1":
        return null;
      case "page2":
        return; //
      default:
        return; //
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "green" }} statusBarHeight={0}>
        <Appbar.Content title="WhatsApp" />

        {/* <MenuOptions/> */}
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
      <ActionFab />
    </SafeAreaView>
  );
}
