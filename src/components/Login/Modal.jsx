import { useRef, useState } from 'react';
import {
  StyleSheet, Pressable, Text, TextInput, View
} from 'react-native';
import Modal from 'react-native-modal';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Axios from '@/func/Axios';

export default function LoginModal(props) {
  const [alert, setAlert] = useState(null);
  const email = useRef('');
  const sent = useRef(false);

  function submit() {
    if (!email.current) return setAlert({ text: 'Mohon isi email Anda' });
    if (sent.current) return setAlert({ text: 'Silahkan coba lagi lain kali' });

    Axios.post('/user/password', { email: email.current })
      .then((res) => {
        sent.current = true;
        setAlert({
          background: '#198754',
          icon: 'check',
          text: 'Silahkan cek email Anda untuk mendapatkan kata sandi baru'
        });
      })
      .catch((err) => {
        if (err.message === 'EMAIL_NOT_FOUND') {
          return setAlert({
            text: `Alamat email ${email.current} tidak dapat ditemukan`
          });
        }

        setAlert({ text: 'Terjadi error, silahkan coba lagi nanti' });
      });
  }

  return (
    <View>
      <Modal
        style={styles.modal}
        backdropTransitionOutTiming={0}
        backdropOpacity={0.5}
        onBackButtonPress={props.onClose}
        onBackdropPress={props.onClose}
        isVisible={props.visible}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Lupa Kata Sandi?</Text>
          <Text style={styles.text}>
            Masukkan alamat email Anda dan kami akan membagikan
            Anda Kata Sandi baru
          </Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(val) => (email.current = val)}
            onSubmitEditing={submit}
          />
          { alert && <Alert style={styles.alert} {...alert} /> }
          <Button onPress={submit}>Kirim Sekarang</Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 50,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  input: {
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#ddd',
    borderRadius: 32,
    width: '100%',
    fontSize: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 32,
    width: '100%',
    backgroundColor: 'orange',
  },
  alert: {
    marginBottom: 26,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
});
