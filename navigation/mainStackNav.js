import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CallStack from "./callStack";
import ChatStack from "./chatStack";
import StatusStack from "./statusStack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../components/main";

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
          name="CallStack"
          component={CallStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatStack"
          component={ChatStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatusStack"
          component={StatusStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
