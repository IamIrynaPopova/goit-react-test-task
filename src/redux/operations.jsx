import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64459b27b80f57f581bdac30.mockapi.io/users";

const fetchUsers = createAsyncThunk("users/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export default fetchUsers;
