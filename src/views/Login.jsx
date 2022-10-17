import { useState } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Button from '@/components/Button';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import PasswordInput from '@/components/PasswordInput';
import Modal from '@/components/Login/Modal';
import Axios from '@/func/Axios';

export default function () {
  const [modal, showModal] = useState(false);
  const navigation = useNavigation();
  const state = { email: null, password: null };

  function login() {
    Axios.post('/auth/login', { ...state })
      .then(async (res) => {
        console.log(res.config.headers)
        await SecureStore.setItemAsync('token', res.data.token);
        navigation.navigate('Etalase');
      })
      .catch((err) => console.error(err.data.message));
  }

  return (
    <View style={styles.container}>
      <Modal visible={modal} onClose={() => showModal(false)} />
      <Image
        source={require('assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(val) => (state.email = val)}
      />
      <PasswordInput
        style={styles.input}
        onChangeText={(val) => (state.password = val)}
      />
      <TextButton
        style={{ alignSelf: 'flex-end' }}
        onPress={() => showModal(true)}
      >
        Lupa Kata Sandi?
      </TextButton>
      <Button style={styles.button} onPress={login}>Masuk</Button>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginEnd: 6 }}>
          Belum punya akun?
        </Text>
        <TextButton
          styleText={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Register')}
        >
          Daftar Sekarang
        </TextButton>
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
  input: {
    marginVertical: 12,
  },
  button: {
    marginTop: 32,
    marginBottom: 24,
  }
});
