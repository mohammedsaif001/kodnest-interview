// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
  itemsPerPage: 2,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    handleChangePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    handleChangeItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { handleChangePageNumber, handleChangeItemsPerPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
