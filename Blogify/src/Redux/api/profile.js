import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserById = createAsyncThunk(
  "profile/getUserById",
  async (id) => {
    let response = await fetch(`/api/v1/users/${id}`);
    let data = await response.json();
    console.log(data, "user json data");
    return data;
  }
);
