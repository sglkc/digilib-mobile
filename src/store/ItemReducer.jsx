import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: 'Doa Bukan Lampu Aladin',
  author: 'Jalaludin Rakhmat',
  description:
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut' +
  'fugit, sed quia consequuntur magni dolored eos qui ratione voluptatem.',
  categories: ['Doa', 'Agama'],
  cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
  media: 'https://core.ac.uk/download/pdf/161807137.pdf',
  type: 'book',
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
