import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../api/profile";

export const profile = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    data: [],
    error: "",
    oneElementData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // user data by id
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "user data by id");
        // state.data = action.payload;
      })
      .addCase(getUserById.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      });
  },
});

export const {
  /* Custom Reducers */
} = profile.actions;
export default profile.reducer;
