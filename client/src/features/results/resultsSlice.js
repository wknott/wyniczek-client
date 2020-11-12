import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
    numberOfResults: null,
    loading: false,
    result: null,
  },
  reducers: {
    fetchResult: state => {
      state.loading = true;
    },
    fetchResultSuccess: (state, { payload: result }) => {
      state.result = result;
      state.loading = false;
    },
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

export const {
  fetchResult,
  fetchResultSuccess,
  fetchResults,
  fetchError,
  fetchResultsSuccess
} = resultsSlice.actions;

export const selectResultsState = state => state.results;
export const selectResults = state => selectResultsState(state).results;
export const selectLoading = state => selectResultsState(state).loading;
export const selectResult = state => selectResultsState(state).result;

export default resultsSlice.reducer;