import {
  StyleSheet, Pressable, Text, TextInput, View
} from 'react-native';
import Modal from 'react-native-modal';
import Button from '@/components/Button';

export default function (props) {
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
            tautan untuk membuat Kata Sandi baru
          </Text>
          <TextInput placeholder="Email" style={styles.input} />
          <Button>Kirim Sekarang</Button>
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
});
