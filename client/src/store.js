import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import navReducer from "./features/navigation/Navigation/navSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});