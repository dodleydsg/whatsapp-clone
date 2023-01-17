import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import Chats from "../components/chats";

const Tab = createMaterialTopTabNavigator();

export default function MainTab(props) {
  const Settings = () => <Text>This is the Settings</Text>;

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        ...props,
        tabBarBounces: true,
        tabBarIndicatorStyle: { backgroundColor: "white" },
        tabBarLabelStyle: { textTransform: "uppercase", color: "white" },
      }}
    >
      {/* <Tab.Screen
        name="community"
        options={{
          title: () => (
            <IconButton
              style={{ margin: 0, padding: 0 }}
              icon="account-group"
              size={18}
            />
          ),
        }}
        component={Settings}
      /> */}
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Settings} />
      <Tab.Screen name="Calls" component={Settings} />
    </Tab.Navigator>
  );
}
