import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { Appbar } from "react-native-paper";
import { TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconButton, MD2Colors } from "react-native-paper";

const _ = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

export default function Header(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Appbar.Header style={styles.container} statusBarHeight={0}>
          <Appbar.Content title="WhatsApp" />
          <Appbar.Action icon="camera-outline" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <View style={styles.tabBar}>
          {/* <Text>{console.log(props.state.routeNames)}</Text> */}
          {props.state.routeNames.map((el, i) => {
            const activeTab = props.state.index;
            if (el === "community") {
              return (
                <IconButton
                  size={18}
                  style={{ padding: 0, marginVertical: 0 }}
                  icon="google"
                  onPress={() => props.navigation.navigate(el)}
                />
              );
            } else
              return (
                <TouchableRipple
                  style={
                    activeTab === i
                      ? { ...styles.tabItem, ...styles.active }
                      : styles.tabItem
                  }
                  onPress={() => props.navigation.navigate(el)}
                >
                  <Text style={styles.tabText}>{el}</Text>
                </TouchableRipple>
              );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MD2Colors.green300,
  },
  tabBar: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 19,
  },
  active: {
    borderBottomWidth: 4,
    paddingBottom: 15,
  },
  tabText: {
    fontSize: 16,
    textTransform: "uppercase",
  },
});
