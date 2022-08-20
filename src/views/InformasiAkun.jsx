import { ScrollView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextButton from '@/components/TextButton';

export default function () {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nama</Text>
      <Text style={styles.content}>Muhammad Irawan</Text>
      <Text style={styles.title}>Email</Text>
      <Text style={styles.content}>irawan@gmail.com</Text>
      <Text style={styles.title}>Tanggal Lahir</Text>
      <Text style={styles.content}>06 Agustus 1971</Text>
      {/* TODO: pindah tombol ubah ke atas */}
      <TextButton
        styleText={styles.button}
        onPress={() => navigation.navigate('UbahInformasiAkun')}
      >
        Ubah
      </TextButton>
      <TextButton
        styleText={styles.button}
        onPress={() => navigation.navigate('UbahPassword')}
      >
        Ganti Kata Sandi?
      </TextButton>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  content: {
    marginBottom: 32,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
