import { takeLatest, call } from "redux-saga/effects";
import {
    handleLogout,
} from "./authSlice";

function* handleLogoutHandler() {
    try {
        yield localStorage.removeItem("user");
    } catch (error) {
        yield call(alert, "Nie udało się wylogować.");
    }
}


export function* watchHandleLogout() {
    yield takeLatest(handleLogout.type, handleLogoutHandler);
}
