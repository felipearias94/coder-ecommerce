import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { SearchBar } from "@rneui/base";

const Search = ({ textInput, setTextInput, isLoading = false }) => {
  return (
    <SearchBar
      platform="android"
      containerStyle={styles.input}
      onChangeText={setTextInput}
      placeholder="Buscar..."
      placeholderTextColor={colors.black}
      round
      showLoading={isLoading}
      value={textInput}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
