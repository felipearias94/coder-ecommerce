import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../firebase/database';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: (name) => 'categories.json',
    }),
    getProductsByCategory: build.query({
      query: (category) => `products?category=${category}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } =
  ecommerceApi;
