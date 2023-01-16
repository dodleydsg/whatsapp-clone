import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/header";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
  const HomeScreen = () => <Text>his is the home</Text>;
  const Settings = () => <Text>This is the Settings</Text>;

  return (
    <PaperProvider>
        <SafeAreaView>
        <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ 
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
        </SafeAreaView>
    </PaperProvider>
    
  );
}
