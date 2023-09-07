import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { SearchBar } from "@rneui/base";

const Search = ({ textInput, setTextInput, isLoading = false }) => {
  return (
    <SearchBar
      platform="android"
      containerStyle={styles.input}
      inputContainerStyle={styles.input}
      inputStyle={styles.input}
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
    backgroundColor: colors.white,
    borderWidth: 0,
  },
});
