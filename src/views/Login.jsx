import { useState } from 'react';
import {
  Button, StyleSheet, Image, Text, TextInput, Pressable, View
} from 'react-native';
import Modal from '@/components/Login/Modal';

export default function () {
  const [modal, showModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={modal} onClose={() => showModal(false)} />
      <Image
        source={require('assets/logo.png')}
        style={styles.image}
      />
      <TextInput placeholder="Email" style={styles.input}	/>
      <View style={styles.passwordContainer}>
        <TextInput placeholder="Kata Sandi" style={styles.input} />
        <Image
          source={require('assets/eye-slash.png')}
          style={styles.passwordIcon}
        />
      </View>
      <Pressable
        style={{ alignSelf: 'flex-end' }}
        onPress={() => showModal(true)}
      >
        <Text style={{ fontSize: 16 }}>Lupa Kata Sandi?</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Masuk
        </Text>
      </Pressable>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginEnd: 6 }}>
          Belum punya akun?
        </Text>
        <Pressable>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Daftar Sekarang
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 50,
    marginBottom: 50,
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
    paddingHorizontal: 32,
    backgroundColor: '#ddd',
    borderRadius: 32,
    width: '100%',
    fontSize: 16,
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
  }
});
