import { createSlice } from "@reduxjs/toolkit";

const initialState = 'semua';

export const ItemType = createSlice({
  name: 'ItemType',
  initialState,
  reducers:{
    setItemType: (state, action) => action.payload
  }
})

export const { setItemType } = ItemType.actions;

export default ItemType.reducer;
