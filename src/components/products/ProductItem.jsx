import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>${item.price}</Text>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 13,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 80,
    height: 80,
  },
  rating: { backgroundColor: colors.white },
});
