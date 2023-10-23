import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setProductsSelected } from "../../redux/slices/homeSlice";

const ProductItem = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onProductSelection = (item) => {
    dispatch(setProductsSelected(item));
    navigation.navigate("productDetails");
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => onProductSelection(item)}
    >
      <Text style={width < 300 ? styles.minTitle : styles.title}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 13,
    marginHorizontal: 20,
  },
  minTitle: {
    fontSize: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Bold",
  },
  price: { fontSize: 15, fontFamily: "Bold" },
  image: {
    width: 80,
    height: 80,
  },
  rating: { backgroundColor: colors.white },
});
