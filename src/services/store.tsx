import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";
import { baseApi } from "../utilits/baseApi";
import { TypedUseSelectorHook } from "react-redux";

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

export type AppDispatch = typeof store.dispatch;

// Создаем собственные хуки для использования dispatch и selector с типизацией

export type RootState = ReturnType<typeof rootReducer>;
