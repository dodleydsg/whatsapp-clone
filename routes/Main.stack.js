import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../components/main";
import ChatDetail from "../components/chats/chatDetail";
import StatusDetail from "../components/status/statusDetail";
import CallDetail from "../components/calls/callDetail";

export const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CallDetail"
          component={CallDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatDetail"
          component={ChatDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatusDetail"
          component={StatusDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
