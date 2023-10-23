import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import { ecommerceApi } from '../services/ecommerceApi';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    homeSlice,
    authSlice,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
});
