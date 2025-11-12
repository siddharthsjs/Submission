import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: ""
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearForm: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    }
  }
});

export const { setUsername, setEmail, setPassword, clearForm } = loginSlice.actions;
export default loginSlice.reducer;
