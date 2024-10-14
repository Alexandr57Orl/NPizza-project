import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";

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
  },
});

export type RootState = ReturnType<typeof rootReducer>;
