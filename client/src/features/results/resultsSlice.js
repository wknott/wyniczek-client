import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
    loading: false,
  },
  reducers: {
    fetchResults: state => {
      state.loading = true;
    },
    fetchResultsSuccess: (state, { payload: results }) => {
      state.results = results;
      state.loading = false;
    },
    fetchResultsError: state => {
      state.loading = false;
    },
  },
});

export const { fetchResults, fetchResultsError, fetchResultsSuccess } = resultsSlice.actions;

export const selectResultsState = state => state.results;
export const selectResults = state => selectResultsState(state).results;
export const selectLoading = state => selectResultsState(state).loading;

export default resultsSlice.reducer;