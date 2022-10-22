import { useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/UserReducer';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Datepicker from '@/components/Datepicker';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function () {
  const user = useSelector((state) => state.user);
  const [alert, setAlert] = useState(null);
  const state = useRef({ ...user });
  const dispatch = useDispatch();

  function changeProfile() {
    if (Object.values(state.current).filter(e => !e).length) {
      return setAlert({ text: 'Mohon isi semua data diatas' });
    }

    Axios.patch('/user', { ...state.current })
      .then(() => {
        setAlert({
          background: '#198754',
          icon: 'check',
          text: 'Informasi akun telah diperbarui'
        });
        setTimeout(() => setAlert(null), 5000);
        dispatch(setUser({ ...state.current }));
      })
      .catch(() => setAlert({ text: 'Terjadi error, silahkan coba lagi' }));
  }

  const Component = (
    <>
      <TextInput
        style={{ marginTop: 16 }}
        placeholder="Nama Lengkap"
        onChangeText={(val) => (state.current.nama = val)}
      />
      <TextInput
        style={{ marginTop: 16 }}
        placeholder="Email"
        onChangeText={(val) => (state.current.email = val)}
      />
      <Datepicker onChangeValue={(val) => state.current.tanggal_lahir = val} />
      { alert && <Alert {...alert} /> }
      <Button
        style={{ marginTop: 16 }}
        styleButton={{ paddingVertical: 14 }}
        onPress={changeProfile}
      >
        Ganti Sekarang
      </Button>
    </>
  );

  return <ViewContainer component={Component} />;
}
