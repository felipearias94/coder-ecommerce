import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import RootNavigation from "./RootNavigation";
import Purchases from "../screens/Purchases";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import ConfigurationNav from './ConfigurationNav';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.lightBeige,
        tabBarActiveTintColor: colors.lightBeige,
      }}
      initialRouteName='rootNavigation'
    >
      <Tab.Screen
        name='rootNavigation'
        component={RootNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='shopping-basket'
              size={24}
              color={focused ? colors.black : colors.mediumGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name='purchases'
        component={Purchases}
        options={{
          tabBarIcon: ({ focused }) => (
            <Foundation
              name='dollar'
              size={30}
              color={focused ? colors.black : colors.mediumGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name='configurations'
        component={ConfigurationNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='person-circle-outline'
              size={24}
              color={focused ? colors.black : colors.mediumGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
