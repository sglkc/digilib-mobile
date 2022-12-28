import { useRef, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/UserReducer';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Datepicker from '@/components/Datepicker';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function UbahInformasiAkunView() {
  const user = useSelector((state) => state.user);
  const [alert, setAlert] = useState(null);
  const state = useRef({ ...user });
  const dispatch = useDispatch();

  function changeProfile() {
    const { email, nama } = state.current;
    if (Object.values(state.current).filter(e => !e).length) {
      return setAlert({ text: 'Mohon isi semua data diatas' });
    }

    if (/[^\p{L}\d\s@#]|[\d]/ui.test(nama)) {
      return setAlert({ text: 'Nama Lengkap hanya menerima alfabet A-Z' });
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email)
    ) {
      return setAlert({ text: 'Email Anda tidak valid' });
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
      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
        Silahkan ubah informasi akun Anda disini.
      </Text>
      <Text style={{ fontSize: 16 }}>Kosongkan yang tidak ingin diubah</Text>
      <TextInput
        style={{ marginTop: 16 }}
        placeholder="Nama Lengkap"
        maxLength={40}
        onChangeText={(val) => (state.current.nama = val)}
      />
      <TextInput
        style={{ marginTop: 16 }}
        placeholder="Email"
        maxLength={40}
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
