import React from "react";
import {
  TouchableRipple,
  Avatar,
  Text,
  IconButton,
  Button,
} from "react-native-paper";
import { View, StyleSheet, Icon } from "react-native";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";

export default function CallItem({
  avatarImage,
  headline,
  status,
  timeStamp,
  subtitle,
  callType,
}) {
  let rand = 1;
  const callIcon = () => {
    switch (callType) {
      case "video":
        return <IconButton icon="video" />;
      case "audio":
        return <IconButton icon="phone" />;
      default:
        return null;
    }
  };

  const statusIcon = () => {
    switch (status) {
      case "missed":
        return (
          <MCIcons
            name="arrow-bottom-left"
            style={{ marginRight: 4 }}
            color="red"
            size={14}
          />
        );
      case "accepted":
        return (
          <MCIcons
            name="arrow-top-right"
            style={{ marginRight: 4 }}
            color="green"
            size={14}
          />
        );
      default:
        return null;
    }
  };
  return (
    <TouchableRipple style={styles.container} onPress={() => false}>
      <>
        <Avatar.Icon
          size={54}
          icon={avatarImage || "account"}
          style={styles.avatarSection}
        />
        <View style={styles.mainSection}>
          {/* Chat name and last send message  */}
          <Text variant="titleMedium">{headline || "Headline Here"}</Text>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {statusIcon()}
            <Text variant="bodyMedium" style={{ color: "grey" }}>
              {subtitle || "Date here"}
            </Text>
          </View>
        </View>
        <View style={styles.asideSection}>
          {/* Contains icon of type of call video|audio */}
          {callIcon()}
        </View>
      </>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 36,
    flexBasis: 64,
    flexGrow: 1,
  },
  mainSection: {
    flex: 4,
    justifyContent: "center",
    height: 54,
    marginLeft: 12,
  },
  avatarSection: {
    flex: 1,
  },
  asideSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 54,
  },
});
