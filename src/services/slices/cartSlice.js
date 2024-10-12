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
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice =
        (state.totalPrice || 0) + action.payload.price * (state.count || 1);
    },
    minusItem(state, action) {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (!item) {
        console.error(`Элемент с id ${action.payload.id} не найден`);
      } else if (item.count > 0) {
        item.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find((obj) => obj.id === id);

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
