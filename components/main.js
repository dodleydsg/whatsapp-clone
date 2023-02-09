import React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MainTab from "../navigation/mainTabNav";
import { useNavigationState } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function Main({ theme, navigation }) {
  //check current screen from navigation and render appropriate header

  const state = useNavigationState((state) => state);

  const renderMenu = () => {
    if (state.index === 0) {
      // 0 index means a
      //render full menu
    }
  };

  const search = () => {};

  return (
    <SafeAreaView style={{ backgroundColor: "#25D366", flex: 1 }}>
      <ScrollView>
        <Appbar.Header
          style={{ backgroundColor: "#25D366" }}
          statusBarHeight={0}
        >
          <Appbar.Content title="WhatsApp" />
          <Appbar.Action icon="camera-outline" />
          <Appbar.Action icon="magnify" onPress={search} />
          <Appbar.Action icon="dots-vertical" onPress={renderMenu} />
        </Appbar.Header>
        <MainTab
          tabBarStyle={{
            backgroundColor: "#25D366",
            flex: 0,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
