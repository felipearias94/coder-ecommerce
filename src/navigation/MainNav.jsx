import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainNav = () => {
  const [checkedUser, setCheckedUser] = useState(null);
  const user = useSelector((state) => state.authSlice.user);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);
        console.log(userEmail);
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, [user]);
  return (
    <NavigationContainer>
      {checkedUser ? <TabNavigation /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
