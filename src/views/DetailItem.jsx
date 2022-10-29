import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '@/store/ItemReducer';
import Button from '@/components/Button';
import DetailItem from '@/components/DetailItem';
import Axios from '@/func/Axios';
import { NODE_ENV } from '@env';

export default function DetailItemView() {
  const placeholder = {
    audio: {
      title: 'Neuro Psikologi',
      author: 'Jalaludin Rakhmat',
      description:
      'Ed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
      'accusantium doloremque laudantium.',
      categories: ['Sains dan Pendidikan', 'Psikologi', 'Komunikasi', 'Neurosains'],
      cover: 'placeholder-1.jpg',
      media: 'placeholder.mp3',
      type: 'audio',
      bookmark: false,
    },
    book: {
      title: 'Doa Bukan Lampu Aladin',
      author: 'Jalaludin Rakhmat',
      description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut' +
      'fugit, sed quia consequuntur magni dolored eos qui ratione voluptatem.',
      categories: ['Doa', 'Agama'],
      cover: 'placeholder-2.jpg',
      media: 'placeholder.pdf',
      type: 'book',
      bookmark: false,
    },
    video: {
      title: 'Neuro Psikologi',
      author: 'Jalaludin Rakhmat',
      description:
      'Ed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
      'accusantium doloremque laudantium.',
      categories: ['Sains dan Pendidikan', 'Psikologi', 'Komunikasi', 'Neurosains'],
      cover: 'placeholder-3.jpg',
      media: 'placeholder.mp4',
      type: 'video',
      bookmark: false,
    }
  };
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.post('/histories/' + item.item_id)
      .then(() => false)
      .catch(() => false);
  }, [item.item_id]);

  return (
    <>
      <DetailItem item={item} setItem={setItem} />
      { NODE_ENV !== 'production' &&
      <View style={styles.container}>
        <Text style={{ position: 'absolute', color: 'white' }}>
          DEBUG TIPE ITEM
        </Text>
        { ['audio' ,'book', 'video'].map((type, index) => (
          <Button
            key={index}
            style={styles.buttonContainer}
            styleButton={styles.button}
            text={type}
            onPress={() => dispatch(setItem(placeholder[type]))}
          />
        ))
        }
      </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 24,
    marginRight: 8,
    width: 'auto',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    backgroundColor: '#3333335f',
  },
});
