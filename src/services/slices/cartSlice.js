import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice =
        (state.totalPrice || 0) + action.payload.price * (state.count || 1);
    },
    removeItem(state, action) {
      state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
