import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
    numberOfResults: null,
    loading: false,
  },
  reducers: {
    fetchResults: state => {
      state.loading = true;
    },
    fetchResultsSuccess: (state, { payload }) => {
      state.results = payload.results;
      state.numberOfResults = payload.numberOfResults;
      state.loading = false;
    },
    fetchError: state => {
      state.loading = false;
    },
  },
});

export const { fetchResults, fetchError, fetchResultsSuccess } = resultsSlice.actions;

export const selectResultsState = state => state.results;
export const selectResults = state => selectResultsState(state).results;
export const selectLoading = state => selectResultsState(state).loading;

export default resultsSlice.reducer;