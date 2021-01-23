import { takeLatest, call, put } from "redux-saga/effects";
import { getResult, getResults, updateResult } from "../../proxy/api";
import {
  fetchResult,
  fetchResultSuccess,
  fetchResults,
  fetchError,
  fetchResultsSuccess,
  changeResult
} from "./resultsSlice";

function* fetchResultsHandler({ payload }) {
  try {
    const { results, numberOfResults } = yield call(getResults, payload.page, payload.selectedGameId);
    yield put(fetchResultsSuccess({ results, numberOfResults }));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać wyników.");
    yield put(fetchError);
  }
}

function* fetchResultHandler({ payload }) {
  try {
    const result = yield call(getResult, payload.id);
    yield put(fetchResultSuccess(result));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać wyników.");
    yield put(fetchError);
  }
}

function* changeResultHandler({ payload }) {
  try {
    yield call(updateResult, payload);

  } catch (error) {
    yield call(alert, "Nie udało się aktualizować wyniku.");
    yield put(fetchError);
  }
}

export function* watchFetchResults() {
  yield takeLatest(fetchResults.type, fetchResultsHandler);
}

export function* watchFetchResult() {
  yield takeLatest(fetchResult.type, fetchResultHandler);
}

export function* watchChangeResult() {
  yield takeLatest(changeResult.type, changeResultHandler);
}