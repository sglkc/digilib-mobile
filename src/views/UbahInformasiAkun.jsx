import { StyleSheet, View } from 'react-native';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

export default function () {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nama Lengkap" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Tanggal Lahir" />
      <Button styleButton={styles.button}>Ganti Sekarang</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
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
    marginTop: 16,
    paddingVertical: 14,
  },
});
