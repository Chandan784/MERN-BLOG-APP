import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginById = createAsyncThunk("auth/loginById", async (email , password ) => {
  let notify = (message) => {
    toast.success(message);
  };
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

    console.log(data,"auth data by id");
    return data;
  
});
