import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: 'Terbaru',
  type: 'semua'
};

export const ItemFilter = createSlice({
  name: 'ItemFilter',
  initialState,
  reducers: {
    setOrder: (state, action) => Object.assign(state, { order: action.payload }),
    setType: (state, action) => Object.assign(state, { type: action.payload })
  }
})

export const { setType, setOrder } = ItemFilter.actions;

export default ItemFilter.reducer;
