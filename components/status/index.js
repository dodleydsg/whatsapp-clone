import React, { useState } from "react";
import StatusItem from "./statusItem";
import Container from "../shared/itemContainer";
import { Text } from "react-native";
import { Avatar } from "react-native-paper";

export default function Status({ stackNavigation }) {
  const [chats, setChats] = useState([]);
  return (
    <Container>
      <StatusItem
        onPress={() => stackNavigation.navigate("StatusStack")}
        subtitle="Tap to add status update"
        headline="My status"
      >
        <Avatar.Icon
          size={24}
          icon="plus"
          style={{
            padding: 2,
            backgroundColor: "green",
            position: "absolute",
            right: 0,
            bottom: 0,
            right: 0,
            borderColor: "white",
            borderWidth: 1,
          }}
        />
      </StatusItem>
      <Text
        variant="bodySmall"
        style={{ marginLeft: 18, color: "grey" }}
        avatarImage="user"
      >
        Recent updates
      </Text>
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <StatusItem />
    </Container>
  );
}
