import { createSlice } from "@reduxjs/toolkit";
import fetchUsers from "./operations";

const initialState = {
  users: [],
  isFollowing: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

fetchUsers();

export const usersReducer = usersSlice.reducer;
