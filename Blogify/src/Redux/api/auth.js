import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginById = createAsyncThunk("auth/loginById", async () => {
  try {
    let responce = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let data = await responce.json();

    notify("sucess");

    console.log(data);
    return data;
  } catch (error) {
    window.alert(error);
    console.log(error);
  }
});
