import React from "react";
import CallDetail from "../components/calls/callDetail";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function CallStack() {
  return (
    <>
      <Stack.Navigator initialRouteName="CallDetail">
        <Stack.Screen
          component={CallDetail}
          name="CallDetail"
          options={{ headerTitle: "Call info" }}
        />
      </Stack.Navigator>
    </>
  );
}
