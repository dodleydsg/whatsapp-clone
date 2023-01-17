import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { Appbar } from "react-native-paper";
import { TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconButton, MD2Colors } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "../navigation/mainTabNav";

const _ = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

export default function Header(props) {
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
            justifyContent: "center",
          }}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
}

