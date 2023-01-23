import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import Chats from "../components/chats";
import Calls from "../components/calls";
import Status from "../components/status";
import ActionFab from "../components/shared/actionFab";

const Tab = createMaterialTopTabNavigator();

export default function MainTab(props) {
  const Settings = () => <Text>This is the Settings</Text>;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          ...props,
          tabBarBounces: true,
          tabBarIndicatorStyle: { backgroundColor: "white" },
          tabBarLabelStyle: { textTransform: "uppercase", color: "white" },
        }}
      >
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
      <ActionFab />
    </>
  );
}
