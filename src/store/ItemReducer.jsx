import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  author: '',
  description: '',
  categories: [],
  cover: '',
  media: '',
  type: '',
  bookmark: false,
};

export const Item = createSlice({
  name: 'Item',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setItem } = Item.actions;

export default Item.reducer;
