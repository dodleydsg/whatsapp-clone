import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";
import CallItem from "./callItem";

export default function Calls() {
  const [calls, setCalls] = useState([]);
  //   return <FlatList data={chats} />;
  // FlatList for rendering ChatItems
  return (
    <View style={styles.container}>
      <CallItem
        avatarImage="link-variant"
        headline="Create call link"
        subtitle="Share a link of your Whatsapp call"
      />
      <Text
        variant="bodySmall"
        style={{ marginLeft: 18, color: "grey" }}
        avatarImage="user"
      >
        Recent
      </Text>
      <CallItem callType="video" />
      <CallItem callType="audio" />
      <CallItem status="missed" />
      <CallItem status="accepted" />
      <CallItem />
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
