import { ScrollView, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

export default function () {
  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.input} placeholder="Nama Lengkap" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Tanggal Lahir" />
      <Button styleButton={styles.button}>Ganti Sekarang</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200, // TODO: header component
    padding: 32,
    paddingTop: 64,
    backgroundColor: '#fff',
    height: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 32,
    paddingVertical: 14,
  },
});
