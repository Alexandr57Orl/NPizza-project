import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
