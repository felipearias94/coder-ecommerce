import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ onPress, icon, size = 30 }) => {
  return (
    <Ionicons style={styles.button} name={icon} size={size} onPress={onPress} />
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {},
});
