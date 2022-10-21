import { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { setUser } from '@/store/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import PasswordInput from '@/components/PasswordInput';
import Modal from '@/components/Login/Modal';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function Login({ navigation }) {
  const [modal, showModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const state = useRef({ email: '', password: '' });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  SecureStore.getItemAsync('token')
    .then((token) => {
      Axios.get('/user').then((res) => {
        dispatch(setUser(res.data.result));
        navigation.navigate('Home');
      });
    })
    .catch(() => false);

  function login() {
    if (state.current.email === '' || state.current.password === '') {
      return setError('Mohon isi email dan kata sandi');
    }

    setLoading(true);

    Axios.post('/auth/login', { ...state.current })
      .then(async (res) => {
        setError(null);
        await SecureStore.setItemAsync('token', res.data.token);
        dispatch(setUser({ ...res.data }));
        navigation.navigate('Home');
      })
      .catch((err) => {
        const msg = err.data?.message;
        const localized = msg === 'EMAIL_NOT_FOUND' ? 'Email tidak terdaftar'
          : msg === 'INVALID_PASSWORD' ? 'Password salah'
          : 'Terjadi error, silahkan coba lagi'

        setError(localized);
      })
      .finally(() => setLoading(false));
  }

  const Component = (
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
      { error && <Alert text={error} /> }
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

  return <ViewContainer component={Component} />;
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
