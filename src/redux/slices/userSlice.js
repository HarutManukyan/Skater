import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogedIn: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogedIn(state, { payload }) {
      state.isLogedIn = payload;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setLogedIn, setUser } = userSlice.actions;

export const logedInSelector = (state) => state.user.isLogedIn;
export const userSelector = (state) => state.user.user;

export default userSlice.reducer;
