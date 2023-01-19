import React from "react";
import { View, StyleSheet } from "react-native";

export default function Container({ children }) {
  //  For testing returns a View component but return  FlatList for production
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    columnGap: 12,
    justifyContent: "center",
    marginTop: 4,
  },
});
