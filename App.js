import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "./src/theme/colors";
import Home from "./src/screens/Home";
import { useState } from "react";
import Products from "./src/screens/Products";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  console.log(categorySelected);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar backgroundColor={colors.heavyBlue} />
      {categorySelected ? (
        <Products
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
