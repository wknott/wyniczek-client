import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
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
    fetchNewGameDetails: state => {
      state.loading = true;
    },
    fetchNewGameDetailsSuccess: (state, { payload: gameDetails }) => {
      state.gameDetails = gameDetails;
      state.loading = false;
    },
    fetchNewGamesByQuery: state => {
      state.loading = true;
    },
    fetchNewGamesByQuerySuccess: (state, { payload: foundGames }) => {
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
  fetchNewGamesByQuery,
  fetchNewGamesByQuerySuccess,
  fetchNewGameDetails,
  fetchNewGameDetailsSuccess,
} = gamesSlice.actions;

export const selectGamesState = state => state.games;
export const selectGames = state => selectGamesState(state).games;
export const selectLoading = state => selectGamesState(state).loading;
export const selectFoundGames = state => selectGamesState(state).foundGames;
export const selectGameDetails = state => selectGamesState(state).gameDetails;

export const getGameById = (state, GameId) => selectGames(state).find(({ _id }) => _id === GameId);

export default gamesSlice.reducer;