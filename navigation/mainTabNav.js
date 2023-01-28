import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "../components/chats";
import Calls from "../components/calls";
import Status from "../components/status";
import ActionFab from "../components/shared/actionFab";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function MainTab(props) {
  const stackNavigation = useNavigation();
  return (
    <>
      <NavigationContainer independent>
        <Tab.Navigator
          initialRouteName="Chats"
          screenOptions={{
            ...props,
            tabBarBounces: true,
            tabBarIndicatorStyle: { backgroundColor: "white" },
            tabBarLabelStyle: { textTransform: "uppercase", color: "white" },
          }}
        >
          <Tab.Screen name="Chats">
            {() => <Chats stackNavigation={stackNavigation} />}
          </Tab.Screen>

          <Tab.Screen name="Status">
            {() => <Status stackNavigation={stackNavigation} />}
          </Tab.Screen>
          <Tab.Screen name="Calls">
            {() => <Calls stackNavigation={stackNavigation} />}
          </Tab.Screen>
        </Tab.Navigator>
        <ActionFab stackNavigation={stackNavigation} />
      </NavigationContainer>
    </>
  );
}
