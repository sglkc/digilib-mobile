import { Text } from 'react-native';
import ViewContainer from '@/components/ViewContainer';

export default function TentangView() {
  const Component = (
    <Text style={{ fontSize: 16, lineHeight: 28 }}>
      Aplikasi untuk koleksi karya dan pemikiran Allah yarham KH. Jalaluddin
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
  );

  return <ViewContainer component={Component} />;
}
