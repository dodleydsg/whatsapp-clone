import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatDetail from "../components/chats/chatDetail";

const Stack = createStackNavigator();
export default function ChatStack() {
  return (
    <>
      <Stack.Navigator initialRouteName="ChatDetail">
        <Stack.Screen
          component={ChatDetail}
          name="ChatDetail"
          options={{ headerTitle: "Profile Here | Name Here" }}
        />
      </Stack.Navigator>
    </>
  );
}
