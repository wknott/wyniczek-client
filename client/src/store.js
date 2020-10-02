import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./authSlice";
import navReducer from "./features/navigation/Navigation/navSlice";
import gamesReducer from "./features/games/gamesSlice";
import { watchFetchGames } from "./features/games/gamesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    games: gamesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchGames);

export default store;