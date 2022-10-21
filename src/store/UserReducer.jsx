import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: '',
  email: '',
  tanggal_lahir: '',
  token: ''
};

export const Item = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      const token = payload.token ? 'Bearer ' + payload.token : '';

      payload.token = token;
      state = Object.assign(state, payload);
    },
  },
});

export const { setUser } = Item.actions;

export default Item.reducer;
