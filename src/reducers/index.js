// imports from packages
import { combineReducers } from "@reduxjs/toolkit";

// import slice reducers
import userReducer from "../slices/userSlice";
import trainingReducer from "../slices/trainingSlice";

const rootReducer = combineReducers({
  user: userReducer,
  training: trainingReducer,
});

export default rootReducer;
