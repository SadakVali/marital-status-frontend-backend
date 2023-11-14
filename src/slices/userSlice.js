// imports from packages
import { createSlice } from "@reduxjs/toolkit";

// initialize variables
const initialState = {
  loading: false,
  matchedCriminalsMarriageIds: null,
  matchedCriminalsData: null,
};

// creating a new slice of information
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setMatchedCriminalsMarriageIds(state, value) {
      state.matchedCriminalsMarriageIds = value.payload;
    },
    setMatchedCriminalsData(state, value) {
      state.matchedCriminalsData = value.payload;
    },
  },
});

export const {
  setLoading,
  setMatchedCriminalsMarriageIds,
  setMatchedCriminalsData,
} = userSlice.actions;
export default userSlice.reducer;
