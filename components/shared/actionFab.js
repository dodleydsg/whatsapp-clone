import * as React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigationState } from "@react-navigation/native";

export default function ActionFab({ stackNavigation }) {
  const index = useNavigationState((state) => {
    try {
      return state.index;
    } catch (e) {
      return 0;
    }
  });
  console.log(index);

  switch (index) {
    case 0:
      return (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => stackNavigation.navigate("StatusStack")}
        />
      );
    case 1:
      return (
        <FAB
          icon="google"
          style={styles.fab}
          onPress={() => console.log(navigation)}
        />
      );
    case 2:
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
