import { ScrollView, StyleSheet, Text } from 'react-native';
import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';

export default function () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Kata Sandi baru Anda harus berbeda dari Kata Sandi yang digunakan sebelumnya
      </Text>
      <PasswordInput style={styles.input} placeholder="Kata Sandi baru" />
      <Button styleButton={{ paddingVertical: 14 }}>Ganti Sekarang</Button>
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
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    marginVertical: 32,
  }
});
