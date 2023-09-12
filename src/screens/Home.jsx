import { View } from "react-native";
import React from "react";
import CategoriesList from "../components/categories/CategoriesList";
import Products from "./Products";

const Home = ({ setCategorySelected }) => {
  return (
    <View>
      <CategoriesList setCategorySelected={setCategorySelected} />
    </View>
  );
};

export default Home;
