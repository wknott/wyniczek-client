import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./common/authSlice";
import navReducer from "./core/App/Navigation/navSlice";
import gamesReducer from "./features/games/gamesSlice";
import resultsReducer from "./features/results/resultsSlice";
import usersReducer from "./features/users/usersSlice";
import themeReducer from "./themeSlice"; 
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    games: gamesReducer,
    results: resultsReducer,
    users: usersReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;