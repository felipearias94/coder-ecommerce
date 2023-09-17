import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { colors } from "./src/theme/colors";
import Home from "./src/screens/Home";
import { useState } from "react";
import Products from "./src/screens/Products";
import { useFonts } from "expo-font";
import ProductDetails from "./src/screens/ProductDetails";
import { products } from "./src/data/products";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    Regular: require("./assets/fonts/NanumGothic-Regular.ttf"),
    Bold: require("./assets/fonts/NanumGothic-Bold.ttf"),
    ExtraBold: require("./assets/fonts/NanumGothic-ExtraBold.ttf"),
  });
  const [categorySelected, setCategorySelected] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar backgroundColor={colors.heavyBlue} />
      {/* {categorySelected ? (
        <Products
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )} */}
      <ProductDetails product={products[2]} />
    </SafeAreaView>
  );
}
