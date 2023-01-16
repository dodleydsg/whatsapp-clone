import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/header";

const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
  const HomeScreen = () => <Text>his is the home</Text>;
  const Settings = () => <Text>This is the Settings</Text>;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <Header {...props} />}
        initialRouteName="Chats"
        screenOptions={{
          tabBarBounces: true,
          tabBarGap: 44,
        }}
      >
        <Tab.Screen name="community" component={Settings} />
        <Tab.Screen name="Chats" component={HomeScreen} />
        <Tab.Screen name="Status" component={Settings} />
        <Tab.Screen name="Calls" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
