import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextButton from '@/components/TextButton';
import * as SecureStore from 'expo-secure-store';

export default function () {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  SecureStore.getItemAsync('user')
    .then((str) => setUser(JSON.parse(str)))
    .catch(console.error);

  return (
    <View>
      <Text style={styles.title}>Nama</Text>
      <Text style={styles.content}>{ user?.nama }</Text>
      <Text style={styles.title}>Email</Text>
      <Text style={styles.content}>{ user?.email }</Text>
      <Text style={styles.title}>Tanggal Lahir</Text>
      <Text style={styles.content}>{ user?.tanggal_lahir }</Text>
      <TextButton
        styleText={styles.button}
        onPress={() => navigation.navigate('UbahPassword')}
        text="Ganti Kata Sandi?"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  content: {
    marginBottom: 32,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
