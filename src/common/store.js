import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '../slices/profile';
import tokenReducer from '../slices/token';


export const store = configureStore({
  reducer:{
  profile:profileReducer,
  token:tokenReducer
  }
})