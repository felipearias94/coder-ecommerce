import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthNav from './AuthNav';

const MainNav = () => {
  const user = '';
  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
