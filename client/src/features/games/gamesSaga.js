import { takeLatest, call, put, debounce } from "redux-saga/effects";
import { getGameDetails, getGames, getGamesFromQuery } from "../../proxy/api";
import {
  fetchGames,
  fetchGamesByQuery,
  fetchError,
  fetchGamesByQuerySuccess,
  fetchGamesSuccess,
  fetchGameDetails,
  fetchGameDetailsSuccess
} from "./gamesSlice";

function* fetchGamesHandler() {
  try {
    const games = yield call(getGames);
    yield put(fetchGamesSuccess(games));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

function* fetchGameDetailsHandler({ payload: gameId }) {
  try {
    const gameDetails = yield call(getGameDetails, gameId);
    yield put(fetchGameDetailsSuccess(gameDetails));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

function* fetchGamesByQueryHandler({ payload: query }) {
  try {
    const games = yield call(getGamesFromQuery, query);
    yield put(fetchGamesByQuerySuccess(games));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

export function* watchFetchGames() {
  yield takeLatest(fetchGames.type, fetchGamesHandler);
  yield takeLatest(fetchGameDetails.type, fetchGameDetailsHandler);
  yield debounce(500, fetchGamesByQuery.type, fetchGamesByQueryHandler);
};