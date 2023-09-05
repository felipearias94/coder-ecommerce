import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar backgroundColor={colors.heavyBlue} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
