import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
    newGamesFromQuery: [],
    newGameDetails: null,
    game: null,
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
    fetchNewGameDetailsSuccess: (state, { payload: newGameDetails }) => {
      state.newGameDetails = newGameDetails;
      state.loading = false;
    },
    fetchNewGamesByQuery: state => {
      state.loading = true;
    },
    fetchNewGamesByQuerySuccess: (state, { payload: newGamesFromQuery }) => {
      state.newGamesFromQuery = newGamesFromQuery;
      state.loading = false;
    },
    fetchGame: state => {
      state.loading = true;
    },
    fetchGameSuccess: (state, { payload: game }) => {
      state.game = game;
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
  fetchGame,
  fetchGameSuccess,
} = gamesSlice.actions;

export const selectGamesState = state => state.games;
export const selectGames = state => selectGamesState(state).games;
export const selectLoading = state => selectGamesState(state).loading;
export const selectFoundGames = state => selectGamesState(state).newGamesFromQuery;
export const selectGameDetails = state => selectGamesState(state).newGameDetails;
export const selectGame = state => selectGamesState(state).game;

export const getGameById = (state, GameId) => selectGames(state).find(({ _id }) => _id === GameId);

export default gamesSlice.reducer;