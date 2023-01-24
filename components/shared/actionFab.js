import * as React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function ActionFab() {
  let index = useNavigationState((state) => state.index);
  const navigation = useNavigation();
  switch (index) {
    case 0:
      return (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => console.log(navigation.getCurrentRoute().name)}
        />
      );
    case 1:
      return (
        <FAB
          icon="google"
          style={styles.fab}
          onPress={() => console.log(navigation.getCurrentRoute().name)}
        />
      );
    case 3:
      return (
        <FAB
          icon="phone"
          style={styles.fab}
          onPress={() => console.log(navigation.getCurrentRoute().name)}
        />
      );
    default:
      return (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => console.log(navigation.getCurrentRoute().name)}
        />
      );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
