import { useState } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';
import TextButton from '@/components/TextButton';
import TextInput from '@/components/TextInput';
import PasswordInput from '@/components/PasswordInput';
import Modal from '@/components/Login/Modal';

export default function () {
  const [modal, showModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Modal visible={modal} onClose={() => showModal(false)} />
      <Image
        source={require('assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput placeholder="Email" style={styles.input} />
      <PasswordInput style={styles.input} />
      <TextButton
        style={{ alignSelf: 'flex-end' }}
        onPress={() => showModal(true)}
      >
        Lupa Kata Sandi?
      </TextButton>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Etalase')}
      >Masuk</Button>
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
