import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { useNavigation } from '@react-navigation/native';
import IconButton from './IconButton';

const Header = ({ title = 'Home', showGoBack = true }) => {
  const navigation = useNavigation();
  return (
    <View style={showGoBack ? styles.containerWithButton : styles.container}>
      {showGoBack && (
        <View style={{ padding: 10, marginVertical: 20 }}>
          <IconButton icon={'arrow-back'} onPress={() => navigation.goBack()} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  containerWithButton: {
    height: 85,
    width: '100%',
    alignItems: 'center',
    gap: 100,
    backgroundColor: colors.heavyBlue,
    flexDirection: 'row',
  },
  container: {
    height: 85,
    width: '100%',
    alignItems: 'center',
    gap: 100,
    backgroundColor: colors.heavyBlue,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleWrapper: {},
  title: {
    fontSize: 25,
    fontFamily: 'Pacifico',
    marginVertical: 10,
    color: colors.black,
  },
});
