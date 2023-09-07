import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

const Header = ({ title = "Home" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 85,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.heavyBlue,
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    color: colors.black,
  },
});
