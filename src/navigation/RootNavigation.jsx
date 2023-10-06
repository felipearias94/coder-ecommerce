import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import Register from '../screens/Register';
import Login from '../screens/Login';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Home} name='home' />
      <Stack.Screen component={Products} name='products' />
      <Stack.Screen component={ProductDetails} name='productDetails' />
      <Stack.Screen component={Register} name='register' />
      <Stack.Screen component={Login} name='login' />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
