import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import ChatItem from "./chatItem";
import Container from "../shared/itemContainer";
import { ScrollView } from "react-native-gesture-handler";

export default function Chats({ stackNavigation }) {
  const [chats, setChats] = useState([]);
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarHeader}>
        <Text variant="titleLarge">Whatsapp</Text>
      </View>
      <View style={styles.tabBar}>
        <Text>Chats</Text>
        <Text>Status</Text>
        <Text>Calls</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.barContainer}
        >
          <View style={styles.bar}>
            <Text>Here</Text>
          </View>
        </ScrollView>
      </View>
    </View>
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
