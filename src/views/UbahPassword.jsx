import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function UbahPassword() {
  const [alert, setAlert] = useState(null);
  const password = useRef('');

  function changePassword() {
    if (!password.current) {
      return setAlert({ text: 'Silahkan isi kata sandi baru' });
    }

    Axios.patch('/user/password', { password: password.current })
      .then(() => {
        setAlert({
          background: '#198754',
          icon: 'check',
          text: 'Kata sandi telah diganti'
        });
        setTimeout(() => setAlert(null), 5000);
      }
      )
      .catch(() => setAlert({ text: 'Terjadi error, silahkan coba lagi' }))
  }

  const Component = (
    <>
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#333' }}>
        Kata Sandi baru Anda harus berbeda dari Kata Sandi yang digunakan sebelumnya
      </Text>
      <PasswordInput
        style={{ marginTop: 16 }}
        placeholder="Kata Sandi baru"
        onChangeText={(val) => (password.current = val)}
      />
      { alert &&
      <Alert style={{ marginTop: 16 }} {...alert} />
      }
      <Button
        style={{ marginTop: 16 }}
        styleButton={{ paddingVertical: 16 }}
        onPress={changePassword}
      >
        Ganti Sekarang
      </Button>
    </>
  );

  return <ViewContainer component={Component} />
}
