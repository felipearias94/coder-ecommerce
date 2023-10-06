import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';

const MainNav = () => {
  const user = useSelector((state) => state.authSlice.user);
  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
