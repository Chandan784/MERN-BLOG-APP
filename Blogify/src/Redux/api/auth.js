import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginById = createAsyncThunk("auth/loginById", async (obj) => {
  let notify = (message) => {
    toast.success(message);
  };
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

     notify("sucess");
    console.log(data, "auth data by id");
    return data;
  } catch (error) {
    console.log(error);
  }
});
