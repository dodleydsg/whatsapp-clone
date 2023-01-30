import * as React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useNavigationState } from "@react-navigation/native";

export default function ActionFab({ stackNavigation }) {
  const index = useNavigationState((state) => {
    try {
      return state.index;
    } catch (e) {
      return 0;
    }
  });

  switch (index) {
    case 0:
      return (
        <FAB
          icon="message"
          style={styles.fab}
          onPress={() => stackNavigation.navigate("StatusStack")}
        />
      );
    case 1:
      return (
        <View>
          <FAB
            icon="pencil"
            style={{ ...styles.fab, ...styles.specialFab }}
            onPress={() => console.log(navigation)}
          />
          <FAB
            icon="camera"
            style={styles.fab}
            onPress={() => console.log(navigation)}
          />
        </View>
      );
    case 2:
      return (
        <FAB
          icon="phone-plus"
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
    borderRadius: 30,
    bottom: 0,
    padding: 2,
  },
  specialFab: {
    bottom: 70,
    padding: 0,
    backgroundColor: "gray",
  },
});
