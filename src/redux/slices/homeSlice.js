import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/products';

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    allCategories: [],
    allProducts: products,
    categorySelected: '',
    productsFilteredByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategoryPressed: (initialState, action) => {
      initialState.categorySelected = action.payload;

      initialState.productsFilteredByCategory = initialState.allProducts.filter(
        (el) => el.category === initialState.categorySelected
      );
    },
    setProductsSelected: (initialState, action) => {
      initialState.productSelected = action.payload;
    },
  },
});

export const { setCategoryPressed, setProductsSelected } = homeSlice.actions;
export default homeSlice.reducer;
