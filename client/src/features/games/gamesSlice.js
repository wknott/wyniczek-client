import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
  },
  reducers: {
    fetchGames: state => {
      state.loading = true;
      console.log("lalalal");
    },
    fetchGamesSuccess: (state, { payload: games }) => {
      state.games = games;
      state.loading = false;
    },
    fetchGamesError: state => {
      state.loading = false;
    },
  },
});

export const { fetchGames, fetchGamesError, fetchGamesSuccess } = gamesSlice.actions;

export const selectGamesState = state => state.games;
export const selectGames = state => selectGamesState(state).games;
export const selectLoading = state => selectGamesState(state).loading;

export default gamesSlice.reducer;