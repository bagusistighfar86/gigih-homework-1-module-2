import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/tokenSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});