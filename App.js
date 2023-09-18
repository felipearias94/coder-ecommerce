import { SafeAreaView } from "react-native";
import { colors } from "./src/theme/colors";
import { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";

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
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
