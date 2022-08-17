import {
  Button, StyleSheet, Image, Pressable, Text, TextInput, View
} from 'react-native';
import CheckBox from 'expo-checkbox';

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
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Kata Sandi"
          style={styles.input}
        />
        <Image
          source={require('assets/eye-slash.png')}
          style={styles.passwordIcon}
        />
      </View>
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
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Daftar Sekarang
        </Text>
      </Pressable>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, marginEnd: 8 }}>
          Sudah punya akun?
        </Text>
        <Pressable>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Silakan Masuk
          </Text>
        </Pressable>
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
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  passwordIcon: {
    marginEnd: 16,
    width: 28,
    height: 28,
    color: '#000000',
    position: 'absolute',
    right: 0,
  },
  input: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingStart: 32,
    backgroundColor: '#ddd',
    borderRadius: 32,
    width: '100%',
    fontSize: 16,
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
    paddingVertical: 16,
    borderRadius: 32,
    width: '100%',
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
