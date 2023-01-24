import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StatusDetail from "../components/status/statusDetail";

const Stack = createStackNavigator();
export default function StatusStack() {
  return (
    <>
      <Stack.Navigator initialRouteName="StatusDetail">
        <Stack.Screen
          component={StatusDetail}
          name="StatusDetail"
          options={{ headerTitle: "Status Here" }}
        />
      </Stack.Navigator>
    </>
  );
}
