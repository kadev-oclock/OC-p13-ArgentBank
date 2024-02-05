/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const intialState = { 
  profile:{
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
 }
 

export const profilSlice = createSlice({
  name: "profile",
  initialState: intialState,
  reducers: {
    setProfile: (state,payload) => {
      state.profile = {...payload.payload};
      console.log(payload);
    },
    removeProfile: (state) => {
      state.profile = {...intialState.profile};
    },
  }
});

export const {setProfile,removeProfile } = profilSlice.actions;

export default profilSlice.reducer;