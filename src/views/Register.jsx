import {
  StyleSheet, Image, Pressable, Text, View
} from 'react-native';
import Button from '@/components/Button';
import CheckBox from 'expo-checkbox';
import PasswordInput from '@/components/PasswordInput';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';

export default function () {
  return (
    <View style={styles.container}>
      <Pressable style={{ alignSelf: 'flex-start' }}>
        <Image
          source={require('assets/arrow-left.png')}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>Daftar</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Tanggal Lahir" style={styles.input} />
      <PasswordInput style={styles.input} />
      <View style={styles.confirmContainer}>
        <CheckBox style={styles.confirmCheck} />
        <Text style={{ fontSize: 16 }}>
          Dengan ini menyatakan Anda setuju, Anda menerima segala isi
          <Text style={styles.confirmBold}> Syarat Penggunaan </Text>
          dan
          <Text style={styles.confirmBold}> Kebijakan Privasi </Text>
          Jalan Rahmat
        </Text>
      </View>
      <Button style={styles.button}>
        <Text style={styles.buttonText}>
          Daftar Sekarang
        </Text>
      </Button>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginEnd: 8 }}>
          Sudah punya akun?
        </Text>
        <TextButton styleText={{ fontWeight: 'bold' }}>
          Silakan Masuk
        </TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: 16,
    width: 38,
  },
  title: {
    marginVertical: 32,
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26,
    alignSelf: 'flex-start',
  },
  input: {
    marginVertical: 12,
  },
  confirmContainer: {
    marginTop: 16,
    marginHorizontal: 18,
    flexDirection: 'row',
  },
  confirmCheck: {
    marginTop: 8,
    marginEnd: 16,
  },
  confirmBold: {
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 32,
    marginBottom: 24,
  },
});
