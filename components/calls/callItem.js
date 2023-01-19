import React from "react";
import {
  TouchableRipple,
  Avatar,
  Text,
  IconButton,
  Button,
} from "react-native-paper";
import { View, StyleSheet, Icon } from "react-native";

export default function CallItem({ avatarImage, headline, status, timeStamp }) {
  let rand = 1;
  return (
    <TouchableRipple style={styles.container} onPress={() => false}>
      <>
        <Avatar.Icon size={54} icon="account" style={styles.avatarSection} />
        <View style={styles.mainSection}>
          {/* Chat name and last send message  */}
          <Text variant="bodyLarge" style={{ fontWeight: "500" }}>
            Best Sis Thelma
          </Text>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              icon="arrow-bottom-left"
              size={16}
              style={{
                marginHorizontal: 0,
                padding: 0,
                flex: 0,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            />
            <Text variant="bodySmall" style={{ color: "grey" }}>
              Today, 9: 17 AM
            </Text>
          </View>
        </View>
        <View style={styles.asideSection}>
          {/* Contains icon of type of call video|audio */}

          <IconButton icon="phone" />
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
