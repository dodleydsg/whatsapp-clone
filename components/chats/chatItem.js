import React from "react";
import { TouchableRipple, Avatar, Text, Badge } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function ChatItem({
  avatarImage,
  headline,
  subtitle,
  timeStamp,
  badge,
}) {
  return (
    <TouchableRipple style={styles.container} onPress={() => false}>
      <>
        <Avatar.Icon size={54} icon="account" style={styles.avatarSection} />
        <View style={styles.mainSection}>
          {/* Chat name and last send message  */}
          <Text variant="bodyLarge" style={{ fontWeight: "500" }}>
            Best Sis Thelma
          </Text>
          <Text variant="bodySmall" style={{ color: "grey" }}>
            okay
          </Text>
        </View>
        <View style={styles.asideSection}>
          {/* Contains timestamp of last message and number unread messages */}

          <Text variant="bodySmall" style={{ color: "gray" }}>
            8:59 PM
          </Text>
          <Badge>
            {/* Badge for unread messages */}
            11
          </Badge>
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
