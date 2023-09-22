import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/shared/Header";
import { colors } from "../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/shared/IconButton";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.homeSlice.productSelected);

  return (
    <>
      <Header title="Detalles" />
      <IconButton icon={"arrow-back"} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              source={{ uri: product.thumbnail }}
              style={styles.image}
            />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonTitle}>Agregar al carrito</Text>
          </Pressable>
          <Text style={styles.productRating}>
            <Ionicons style={styles.productRating} name="md-star" size={30} />
            {`Rating: ${product.rating}`}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 13,
    marginBottom: 30,
  },
  imageContainer: { alignItems: "center", marginVertical: 10 },
  image: { height: 350, width: 350 },
  dataContainer: { alignItems: "flex-start", marginVertical: 10 },
  productTitle: {
    fontFamily: "Pacifico",
    fontSize: 32,
  },
  productDescription: {
    fontFamily: "Regular",
    fontSize: 15,
    marginVertical: 18,
  },
  productRating: {
    fontFamily: "Bold",
    fontSize: 18,
    marginTop: 18,
    height: 22,
  },
  productPrice: { fontFamily: "ExtraBold", fontSize: 30, marginBottom: 18 },
  button: {
    backgroundColor: colors.heavyBlue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  buttonTitle: { fontFamily: "Bold", fontSize: 18, height: 22 },
});
