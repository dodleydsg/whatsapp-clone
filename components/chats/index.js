import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import ChatItem from "./chatItem";

export default function Chats() {
  const [chats, setChats] = useState([]);
  //   return <FlatList data={chats} />;
  // FlatList for rendering ChatItems
  return (
    <View style={styles.container}>
      <ChatItem id={1} />
      <ChatItem id={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    columnGap: 12,
    justifyContent: "center",
    marginTop: 4,
  },
});
