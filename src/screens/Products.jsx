import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { products } from "../data/products";
import ProductItem from "../components/products/ProductItem";
import Header from "../components/shared/Header";
import Search from "../components/shared/Search";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/shared/IconButton";

const Products = ({ categorySelected, route }) => {
  const navigation = useNavigation();
  const { category } = route.params;
  const [categoryProd, setCategoryProd] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const productsByCategory = products.filter(
      (prod) => prod.category === category
    );
    setCategoryProd(productsByCategory);
    if (search) {
      const titleProduct = categoryProd.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      );
      setCategoryProd(titleProduct);
    }
  }, [categorySelected, search]);

  return (
    <>
      <Header title="Productos" />
      <IconButton
        icon={"arrow-back"}
        onPress={() => navigation.navigate("home")}
      />

      <Search textInput={search} setTextInput={setSearch} />
      <View style={styles.container}>
        {categoryProd.length === 0 ? (
          <View style={styles.notFound}>
            <MaterialIcons name="do-not-disturb-alt" size={40} color="black" />
            <Text style={styles.notFoundText}>No se encontró el producto</Text>
          </View>
        ) : (
          <FlatList
            data={categoryProd}
            keyExtractor={products.id}
            renderItem={({ item }) => <ProductItem item={item} />}
          />
        )}
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginBottom: 300,
  },
  notFound: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "40%",
  },
  notFoundText: { fontSize: 20 },
});
