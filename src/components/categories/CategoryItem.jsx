import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

const CategoryItem = ({ item, setCategorySelected }) => {

  const handleSelectCategory = (category) => {
    setCategorySelected(category);
  };
  
  return (
    <Pressable
      onPress={() => handleSelectCategory(item.item)}
      style={styles.container}
    >
      <Text style={styles.text}>{item.item}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightBeige,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Bold'
  },
});
