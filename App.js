import { SafeAreaView } from "react-native";
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNav from './src/navigation/MainNav';

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
    Regular: require('./assets/fonts/NanumGothic-Regular.ttf'),
    Bold: require('./assets/fonts/NanumGothic-Bold.ttf'),
    ExtraBold: require('./assets/fonts/NanumGothic-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Provider store={store}>
        <MainNav />
      </Provider>
    </SafeAreaView>
  );
}
