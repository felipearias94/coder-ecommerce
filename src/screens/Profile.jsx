import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/shared/Header";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  return (
    <>
      <Header title="Perfil" />
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
        />
        <Pressable style={styles.button}>
          <AntDesign name="camerao" size={24} color="black" />
          <Text style={{ fontFamily: "Bold", fontSize: 18 }}>Abrir Cámara</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesome name="photo" size={24} color="black" />
          <Text style={{ fontFamily: "Bold", fontSize: 18 }}>
            Abrir Galería
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather name="map-pin" size={24} color="black" />
          <Text style={{ fontFamily: "Bold", fontSize: 18 }}>Abrir Mapas</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: { alignItems: "center", paddingTop: 30 },
  image: { width: 150, height: 150 },
  button: {
    flexDirection: "row",
    gap: 8,
    width: "40%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.lightBeige,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 13,
    marginTop: 20,
  },
});
