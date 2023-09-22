import { SafeAreaView } from "react-native";
import { colors } from "./src/theme/colors";
import { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import TabNavigation from "./src/navigation/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    Regular: require("./assets/fonts/NanumGothic-Regular.ttf"),
    Bold: require("./assets/fonts/NanumGothic-Bold.ttf"),
    ExtraBold: require("./assets/fonts/NanumGothic-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
