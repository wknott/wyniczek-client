import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    open: false,
  },
  reducers: {
    handleOpen: (state) => {
      state.open = true;
    },
    handleClose: (state) => {
      state.open = false;
    }
  },
});

export const { handleOpen, handleClose } = navSlice.actions;
export const selectOpen = state => state.nav.open;
export default navSlice.reducer;