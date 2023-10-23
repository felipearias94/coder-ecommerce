import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCategoryPressed } from "../../redux/slices/homeSlice";

const CategoryItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressCategory = (item) => {
    dispatch(setCategoryPressed(item.item));
    navigation.navigate("products");
  };

  return (
    <Pressable onPress={() => onPressCategory(item)} style={styles.container}>
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
