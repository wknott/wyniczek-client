import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("user") !== null,
  },
  reducers: {
    handleLogout: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { handleLogout } = authSlice.actions;
export default authSlice.reducer;