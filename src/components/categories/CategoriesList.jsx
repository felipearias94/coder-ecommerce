import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../../data/categories';
import { colors } from '../../theme/colors';

const CategoriesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={(item) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
