import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: '',
  email: '',
  tanggal_lahir: '',
};

export const Item = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = Item.actions;

export default Item.reducer;
