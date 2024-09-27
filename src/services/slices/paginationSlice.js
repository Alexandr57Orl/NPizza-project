import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
