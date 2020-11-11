import { takeLatest, call, put } from "redux-saga/effects";
import { getResults } from "../../proxy/api";
import { fetchResults, fetchError, fetchResultsSuccess } from "./resultsSlice";

function* fetchResultsHandler({ payload }) {
  try {
    console.log(payload);
    const { results, numberOfResults } = yield call(getResults, payload.page, payload.selectedGame);
    yield put(fetchResultsSuccess({ results, numberOfResults }));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać wyników.");
    yield put(fetchError);
  }
}

export function* watchFetchResults() {
  yield takeLatest(fetchResults.type, fetchResultsHandler);
}