import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import loadingSlice from "./slices/loadingSlice";
import itemsSlice from "./slices/itemsSlice";
import paginationSlice from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    loading: loadingSlice,
    items: itemsSlice,
    pagination: paginationSlice,
  },
});
