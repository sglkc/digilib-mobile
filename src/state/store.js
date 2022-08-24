import { configureStore } from "@reduxjs/toolkit";
import MenuListReducer from "./reducers/MenuListReducer";
import UserReducer from "./reducers/UserReducer";

export const store =  configureStore({
  reducer:{
    menu:MenuListReducer,
    user:UserReducer
  },

})