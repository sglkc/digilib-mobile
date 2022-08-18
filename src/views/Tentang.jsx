import { ScrollView, StyleSheet, Text } from 'react-native';

export default function () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Aplikasi untuk koleksi karya dan pemikiran Allahyarham KH. Jalaluddin
        Rakhmat beserta penulis dan tokoh lain yang menelaah, menyebarkan, dan
        meneruskan karya Kang Jalal. Nama aplikasi "Jalan Rahmat" diambil dari
        salah satu karya beliau yang berbentuk buku. Perpustakaan ini mencakup
        topik-topik yang menjadikan perhatian Allahyarham, yaitu:
        {`
        - Ahlul Bait
        - Tafsir Al-Qur'an
        - Hadits
        - Filsafat
        - Sejarah
        - Psikologi
        - Sains dan Pendidikan
        - Komunikasi
        - Agama
        - Fikih
        - Sosial Politik
        - Tasawuff
        - Neurosains
        - Do'a
        `.replace(/^[ ]+/gm, '')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200, // TODO: header component
    padding: 32,
    backgroundColor: '#fff',
    height: '100%',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
  },
});
