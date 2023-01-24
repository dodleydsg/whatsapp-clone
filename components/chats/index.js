import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import ChatItem from "./chatItem";
import Container from "../shared/itemContainer";

export default function Chats({ stackNavigation }) {
  const [chats, setChats] = useState([]);
  return (
    <Container>
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
