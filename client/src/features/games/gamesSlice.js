import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
    query: "",
    foundGames: [],
    gameDetails: null,
  },
  reducers: {
    fetchGames: state => {
      state.loading = true;
    },
    fetchGamesSuccess: (state, { payload: games }) => {
      state.games = games;
      state.loading = false;
    },
    fetchGameDetails: state => {
      state.loading = true;
    },
    fetchGameDetailsSuccess: (state, { payload: gameDetails }) => {
      state.gameDetails = gameDetails;
      state.loading = false;
    },
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
    fetchGamesByQuery: state => {
      state.loading = true;
    },
    fetchGamesByQuerySuccess: (state, { payload: foundGames }) => {
      state.foundGames = foundGames;
      state.loading = false;
    },
    fetchError: state => {
      state.loading = false;
    },

  },
});

export const {
  fetchGames,
  fetchError,
  fetchGamesSuccess,
  fetchGamesByQuery,
  fetchGamesByQuerySuccess,
  setQuery,
  fetchGameDetails,
  fetchGameDetailsSuccess,
} = gamesSlice.actions;

export const selectGamesState = state => state.games;
export const selectGames = state => selectGamesState(state).games;
export const selectLoading = state => selectGamesState(state).loading;
export const selectQuery = state => selectGamesState(state).query;
export const selectFoundGames = state => selectGamesState(state).foundGames;
export const selectGameDetails = state => selectGamesState(state).gameDetails;

export default gamesSlice.reducer;