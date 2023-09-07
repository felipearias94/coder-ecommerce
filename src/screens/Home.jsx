import { View } from "react-native";
import React from "react";
import CategoriesList from "../components/categories/CategoriesList";
import Products from "./Products";

const Home = () => {
  return (
    <View>
      <Products category={"smartphones"} />
      {/* <CategoriesList /> */}
    </View>
  );
};

export default Home;
