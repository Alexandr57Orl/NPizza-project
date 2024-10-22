import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";
import { baseApi } from "../utilits/baseApi";

export const rootReducer = combineReducers({
  filter: filterSlice,
  items: itemsSlice,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    items: itemsSlice,
    cart: cartSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
