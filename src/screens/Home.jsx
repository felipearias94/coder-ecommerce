import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CategoriesList from '../components/categories/CategoriesList';

const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <CategoriesList />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },
});
