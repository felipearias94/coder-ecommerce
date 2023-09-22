import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import Header from "../shared/Header";
import { useSelector } from "react-redux";

const CategoriesList = () => {
  const categories = useSelector((state) => state.homeSlice.allCategories);
  
  return (
    <View style={styles.container}>
      <Header title="Categorias" />
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={(item) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
