// imports from packages
import { combineReducers } from "@reduxjs/toolkit";

// import slice reducers
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
