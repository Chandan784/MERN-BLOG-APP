import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (obj) => {
  try {
    let response = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    console.log(data, "login json data");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const signup = createAsyncThunk("auth/signup", async (obj) => {
  try {
    let response = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    console.log(data, "signup json data");
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const verifyEmail = createAsyncThunk ("auth/verifyemail", async ({email}) =>{
  let response = await fetch("/api/v1/otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "appliacation/json",
    },
    body: JSON.stringify({ email }),
  });
  let data = await response.json();
  console.log(data, "email json data");
  return data
  
})

export const verifyOtp = createAsyncThunk("auth/verifyotp", async({email, otp}) =>{
  let response = await fetch("/api/v1/otp/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "appliacation/json",
    },
    body: JSON.stringify({ email, otp }),
  });
  let data = await response.json();
  console.log(data, "otp json data");
  return data
})