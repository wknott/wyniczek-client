import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: localStorage.getItem('theme') || 'light'};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      const newThemeState = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newThemeState;
      localStorage.setItem('theme', newThemeState);
    },
  },
});

export const selectTheme = state => state.theme.theme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;