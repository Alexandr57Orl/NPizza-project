import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "items/fetchItemsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://66eb270b55ad32cda47bd76d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  countPizzas: 0,
  status: "loading",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    countPizzas(state) {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { countPizzas, totalPrice } = itemsSlice.actions;

export default itemsSlice.reducer;
