import { useEffect, useState, useRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { setUser } from '@/store/UserReducer';
import { useDispatch } from 'react-redux';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import PasswordInput from '@/components/PasswordInput';
import Modal from '@/components/Login/Modal';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function LoginView({ navigation }) {
  const [modal, showModal] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const state = useRef({ email: '', password: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    SecureStore.getItemAsync('token')
      .then((token) => {
        if (!token) throw new Error();
        Axios.get('/user').then((res) => {
          dispatch(setUser({ ...res.data.result, token: res.data.token }));
          navigation.navigate('Home');
        })
          .catch(() => false);
      })
      .catch(() => false);
  }, []);

  function login() {
    if (state.current.email === '' || state.current.password === '') {
      return setAlert('Mohon isi email dan kata sandi');
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
        .test(state.current.email)
    ) {
      return setAlert('Email Anda tidak valid');
    }

    setLoading(true);

    Axios.post('/auth/login', { ...state.current })
      .then(async (res) => {
        setAlert(null);
        await SecureStore.setItemAsync('token', res.data.token);
        dispatch(setUser({ ...res.data.result, token: res.data.token }));
        navigation.navigate('Home');
      })
      .catch((err) => {
        const msg = err.data?.message;
        const localized = msg === 'EMAIL_NOT_FOUND' ? 'Email tidak terdaftar'
          : msg === 'INVALID_PASSWORD' ? 'Password salah'
          : err.code;

        setAlert(localized);
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
      { alert && <Alert text={alert} /> }
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
