import { call, put, takeLatest } from "redux-saga/effects";
import { getUsers } from "../../proxy/api";
import { fetchError, fetchUsers, fetchUsersSuccess } from "./usersSlice";

function* fetchUsersHandler() {
  try {
    const users = yield call(getUsers, "numberOfResults");
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać użytkowników.");
    yield put(fetchError);
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsers.type, fetchUsersHandler);
}