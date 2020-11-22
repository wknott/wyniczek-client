import { all } from "redux-saga/effects";
import { watchHandleLogout } from "./authSaga";
import { watchFetchGames } from "./features/games/gamesSaga";
import { watchFetchResults, watchFetchResult } from "./features/results/resultsSaga";
import { watchFetchUsers } from "./features/users/usersSaga";

export default function* rootSaga() {
  yield all([
    watchFetchGames(),
    watchFetchResults(),
    watchFetchResult(),
    watchHandleLogout(),
    watchFetchUsers(),
  ]);
}