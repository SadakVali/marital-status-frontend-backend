// imports from packages
import { createSlice } from "@reduxjs/toolkit";

// initialize variables
const initialState = {
  matchedCriminals: [],
};

// creating a new slice of information
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMatchedCriminals(state, value) {
      state.matchedCriminals = value.payload;
    },
  },
});

export const { setMatchedCriminals } = userSlice.actions;
export default userSlice.reducer;
