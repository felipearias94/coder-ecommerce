import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapLoc from '../components/shared/MapLoc';
import Profile from '../screens/Profile';

const ConfigurationNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='profile'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Profile} name='profile' />
      <Stack.Screen component={MapLoc} name='mapLoc' />
    </Stack.Navigator>
  );
};

export default ConfigurationNav;

const styles = StyleSheet.create({});
