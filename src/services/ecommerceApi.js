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

    getImages: build.query({
      query: () => 'image.json',
    }),

    putImages: build.mutation({
      query: (image) => ({
        url: 'image.json',
        method: 'PUT',
        body: image,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  usePutImagesMutation,
  useGetImagesQuery,
} = ecommerceApi;
