import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    fetchUsersSuccess: (state, { payload: users }) => {
      state.users = users;
      state.loading = false;
    },
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchError: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchUsers, fetchUsersSuccess, fetchError } = usersSlice.actions;

export const selectUsersState = state => state.users;
export const selectUsers = state => selectUsersState(state).users;
export const selectLoading = state => selectUsersState(state).loading;

export default usersSlice.reducer;