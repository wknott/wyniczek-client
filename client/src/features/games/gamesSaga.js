import { takeLatest, call, put } from "redux-saga/effects";
import { getGames } from "../../proxy/api";
import { fetchGames, fetchGamesError, fetchGamesSuccess } from "./gamesSlice";

function* fetchGamesHandler() {
  try {
    const games = yield call(getGames);
    yield put(fetchGamesSuccess(games));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchGamesError());
  }
}

export function* watchFetchGames() {
  yield takeLatest(fetchGames.type, fetchGamesHandler);
};