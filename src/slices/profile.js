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
      state.profile = {...state.profile, 
        firstName:payload.payload.firstName,
        lastName:payload.payload.lastName,
        email:(payload.payload.email)?payload.payload.email:state.profile.email,
        password:(payload.payload.password)?payload.payload.password:state.profile.password
      };
      // console.log(payload);
    },
    removeProfile: (state) => {
      state.profile = {...intialState.profile};
    },
  }
});

export const {setProfile,removeProfile } = profilSlice.actions;

export default profilSlice.reducer;