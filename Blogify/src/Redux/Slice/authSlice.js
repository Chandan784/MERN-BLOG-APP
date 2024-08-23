import { createSlice } from "@reduxjs/toolkit";
import { loginById } from "../api/auth";

export const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    data: [],
    error: "",
    oneElementData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // login
      .addCase(loginById.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, " login data ");
        // state.data = action.payload;
      })
      .addCase(loginById.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      });
  },
});

export const {
  /* Custom Reducers */
} = auth.actions;
export default auth.reducer;
