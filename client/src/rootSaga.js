import { all } from "redux-saga/effects";
import { watchFetchGames } from "./features/games/gamesSaga";
import { watchFetchResults, watchFetchResult } from "./features/results/resultsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchGames(),
    watchFetchResults(),
    watchFetchResult(),
  ]);
}