import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import postReducer from "../postSlice";
import clickReducer from "../clickSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    click: clickReducer,
  },
});
