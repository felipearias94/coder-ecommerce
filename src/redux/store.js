import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import { ecommerceApi } from '../services/ecommerceApi';

export const store = configureStore({
  reducer: { homeSlice, [ecommerceApi.reducerPath]: ecommerceApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
});
