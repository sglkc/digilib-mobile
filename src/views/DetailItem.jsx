import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/Button';
import DetailItem from '@/components/DetailItem';

export default function () {
  const initialItem = {
    title: 'Doa Bukan Lampu Aladin',
    author: 'Jalaludin Rakhmat',
    description:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut' +
    'fugit, sed quia consequuntur magni dolored eos qui ratione voluptatem.',
    categories: ['Doa', 'Agama'],
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
    media: '',
    type: 'book',
    bookmark: false,
  };
  const [item, setItem] = useState(initialItem);

  return (
    <DetailItem item={item} setItem={setItem} />
  );
}
