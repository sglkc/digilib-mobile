import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: '',
    email: '',
    password: '',
  };
   
export const CurrentUser = createSlice({
  name:'menulist',
  initialState,
  reducers:{
    setCurrentUser:(state,action)=>{
      state[action.payload.key] = action.payload.payload
    }
  }
})

export const {setCurrentUser} = CurrentUser.actions

export default CurrentUser.reducer