import { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Feather';
import { setUser } from '@/store/UserReducer';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Datepicker from '@/components/Datepicker';
import PasswordInput from '@/components/PasswordInput';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function Register({ navigation }) {
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const state = useRef({
    nama: '',
    email: '',
    password: '',
    tanggal_lahir: ''
  });

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function register() {
    if (Object.values(state.current).filter(e => !e).length) {
      return setError('Mohon isi semua data diatas');
    }

    if (!checked) return setError('Mohon untuk menceklis kotak diatas');

    setLoading(true);

    Axios.post('/auth/register', { ...state.current })
      .then(async (res) => {
        setError(null);
        await SecureStore.setItemAsync('token', res.data.token);
        dispatch(setUser(res.data.result));
        navigation.navigate('Home');
      })
      .catch((err) => {
        const msg = err.data?.message;
        const localized = msg === 'EMAIL_DUPLICATE' ? 'Email sudah terdaftar'
          : 'Terjadi error, silahkan coba lagi'

        setError(localized);
      })
      .finally(() => setLoading(false));
  }

  const Component = (
    <View style={styles.container}>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" color="black" size={32} />
      </Pressable>
      <Text style={styles.title}>Daftar</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        onChangeText={(val) => (state.current.nama = val)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(val) => (state.current.email = val)}
      />
      <Datepicker onChangeValue={(val) => state.current.tanggal_lahir = val} />
      <PasswordInput
        style={styles.input}
        onChangeText={(val) => (state.current.password = val)}
      />
      <View style={styles.confirmContainer}>
        <CheckBox
          style={styles.confirmCheck}
          value={checked}
          onValueChange={setChecked}
          color="#ffa500"
        />
        <Text style={{ fontSize: 16 }}>
          Dengan ini menyatakan Anda setuju, Anda menerima segala isi
          <Text style={styles.confirmBold}> Syarat Penggunaan </Text>
          dan
          <Text style={styles.confirmBold}> Kebijakan Privasi </Text>
          Jalan Rahmat
        </Text>
      </View>
      { error && <Alert text={error} /> }
      <Button loading={loading} style={styles.button} onPress={register}>
        Daftar Sekarang
      </Button>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginEnd: 8 }}>
          Sudah punya akun?
        </Text>
        <TextButton
          styleText={{ fontWeight: 'bold' }}
          onPress={() => navigation.goBack()}
        >
          Silakan Masuk
        </TextButton>
      </View>
    </View>
  );

  return <ViewContainer component={Component} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    marginTop: 24,
    alignSelf: 'flex-start',
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
  }
});
