import { createSlice } from "@reduxjs/toolkit";

import { baseApi, ITEMS_TAG } from "../../utilits/baseApi";
import { IFetchItems, IItemsSlice } from "../../utilits/interfaceApp";

export const fetchItems = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: (params: IFetchItems) => ({
        url: `/items?page=${params.currentPage}&limit=8&${params.category}&sortBy=${params.sortBy}&order=${params.order}${params.search}`,
      }),

      providesTags: () => [{ type: ITEMS_TAG }],
    }),
  }),

  overrideExisting: true,
});

const initialState: IItemsSlice = {
  items: [],
  countPizzas: 0,

  totalPrice: 0,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    countPizzas(state: IItemsSlice) {
      state.countPizzas = state.items.reduce(
        (sum, item) => sum + item.count,
        0
      );
      return state; // Возвращаем новое состояние
    },
    totalPrice(state) {
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
      return state; // Возвращаем новое состояние
    },
  },
});

// Action creators are generated for each case reducer function
export const { countPizzas, totalPrice } = itemsSlice.actions;
export const { useFetchItemsQuery } = fetchItems;
export default itemsSlice.reducer;
