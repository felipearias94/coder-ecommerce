import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigate = (item) => {
    console.log(item);
  };

  return (
    <Pressable
      onPress={() => navigation.navigate("products", { category: item.item })}
      style={styles.container}
    >
      <Text style={styles.text}>{item.item}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
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
    fontFamily: "Bold",
  },
});
