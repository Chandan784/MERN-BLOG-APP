import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyEmail ,verifyOtp } from "../api/auth";

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
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, " login data ");
        // state.data = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      })

      //signup
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "signup data");
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      })

      //Email verification
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "verify email data");
      })
      .addCase(verifyEmail.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      })
      //OTP verification
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "verify email data");
      })
      .addCase(verifyOtp.rejected, (state) => {
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
