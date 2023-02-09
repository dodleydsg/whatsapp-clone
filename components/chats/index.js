import React, { useState } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import ChatItem from "./chatItem";
import Container from "../shared/itemContainer";

export default function Chats({ stackNavigation }) {
  const [chats, setChats] = useState([]);
  return (
    <Container>
      <ChatItem />
      <ChatItem onPress={() => stackNavigation.navigate("ChatStack")} />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </Container>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    position: "absolute",
    height: 12,
  },
  bar: {
    height: 4,
    backgroundColor: "blue",
    zIndex: 10,
  },
  tabBarHeader: {
    padding: 12,
  },
  tabBar: {
    height: 48,
    backgroundColor: "red",
    flex: 0,
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabBarContainer: {},
});
