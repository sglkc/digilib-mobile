import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';

export default function () {
  return (
    <View>
      <Text style={styles.text}>
        Kata Sandi baru Anda harus berbeda dari Kata Sandi yang digunakan sebelumnya
      </Text>
      <PasswordInput style={styles.input} placeholder="Kata Sandi baru" />
      <Button styleButton={{ paddingVertical: 14 }}>Ganti Sekarang</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    marginVertical: 32,
  }
});
