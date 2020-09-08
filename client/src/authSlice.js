import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localStorage.getItem("user") !== null,
  },
  reducers: {
    handleLogout: (state) => {
      state.isAuthenticated = false;
    },
    handleLogin: (state) => {
      state.isAuthenticated = true;
    }
  },
});

export const { handleLogout, handleLogin } = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;