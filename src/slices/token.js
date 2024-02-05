/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      // Ajouter le token au tableau de tokens
      state.token= action.payload;
    },
    resetToken: (state) => {
      // Réinitialiser le tableau de tokens à vide
      state.token ="";
    },
  },
});

export const { setToken, resetToken } = tokenSlice.actions;

export default tokenSlice.reducer;