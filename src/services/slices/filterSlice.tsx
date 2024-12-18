import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFilterSlice } from "../../utilits/interfaceApp";

const initialState: IFilterSlice = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortPropety: "rating ",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<IFilterSlice["sort"]>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
