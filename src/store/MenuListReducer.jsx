import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: 0,
  };
   
export const setMenuList = createSlice({
  name:'menulist',
  initialState,
  reducers:{
    setCurrentMenu:(state,action)=>{
      state.menu = action.payload
    }
  }
})

export const {setCurrentMenu} = setMenuList.actions

export default setMenuList.reducer