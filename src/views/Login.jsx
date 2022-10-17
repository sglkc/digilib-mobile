import { useState, useRef } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '@/components/Button';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import PasswordInput from '@/components/PasswordInput';
import Modal from '@/components/Login/Modal';
import Axios from '@/func/Axios';

export default function () {
  const [modal, showModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const state = useRef({ email: '', password: '' });

  function login() {
    if (state.current.email === '' || state.current.password === '') {
      return setError('Mohon isi email dan kata sandi');
    }

    setLoading(true);

    Axios.post('/auth/login', { ...state.current })
      .then(async (res) => {
        setError(null);
        await SecureStore.setItemAsync('token', res.data.token);
        navigation.navigate('Etalase');
      })
      .catch((err) => {
        const msg = err.data.message;
        const localized = msg === 'EMAIL_NOT_FOUND' ? 'Email tidak terdaftar'
          : msg === 'INVALID_PASSWORD' ? 'Password salah'
          : 'Terjadi error, silahkan coba lagi'

        setError(localized);
      })
      .finally(() => setLoading(false));
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
        keyboardType="email-address"
        placeholder="Email"
        style={styles.input}
        onChangeText={(val) => (state.current.email = val)}
      />
      <PasswordInput
        style={styles.input}
        onChangeText={(val) => (state.current.password = val)}
      />
      <TextButton
        style={{ alignSelf: 'flex-end' }}
        onPress={() => showModal(true)}
      >
        Lupa Kata Sandi?
      </TextButton>
      { error &&
        <View style={styles.alert}>
          <Icon name="exclamation-triangle" size={22} color="white" />
          <Text style={styles.alertText}>{ error }</Text>
        </View>
      }
      <Button loading={loading} style={styles.button} onPress={login}>
        Masuk
      </Button>
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
  },
  alert: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    flexDirection: 'row'
  },
  alertText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'white'
  }
});
