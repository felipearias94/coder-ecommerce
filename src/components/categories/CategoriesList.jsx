import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import Header from '../shared/Header';
import { useGetCategoriesQuery } from '../../services/ecommerceApi';

const CategoriesList = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <Header title='Categorias' showGoBack={false} />
      {isLoading ? (
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(key) => key}
          renderItem={(item) => <CategoryItem item={item} />}
        />
      )}
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
