import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '@/store/ItemReducer';
import Button from '@/components/Button';
import DetailItem from '@/components/DetailItem';

export default function () {
  const placeholder = {
    audio: {
      title: 'Neuro Psikologi',
      author: 'Jalaludin Rakhmat',
      description:
      'Ed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
      'accusantium doloremque laudantium.',
      categories: ['Sains dan Pendidikan', 'Psikologi', 'Komunikasi', 'Neurosains'],
      cover: 'http://cdn.medicalxpress.com/newman/gfx/news/2014/0318_cogsci-grades-orig.jpg',
      media: 'https://filesamples.com/samples/audio/mp3/sample1.mp3',
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
      cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
      media: 'https://core.ac.uk/download/pdf/161807137.pdf',
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
      cover: 'https://i.ytimg.com/vi/zxFWIa9mDIo/maxresdefault.jpg',
      media: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video',
      bookmark: false,
    }
  };
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  return (
    <>
      <DetailItem item={item} setItem={setItem} />
      <View style={styles.container}>
        <Text style={{ position: 'absolute', color: 'white' }}>DEBUG TIPE ITEM</Text>
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
