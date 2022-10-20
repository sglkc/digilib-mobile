import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import TextButton from '@/components/TextButton';
import ViewContainer from '@/components/ViewContainer';

export default function InformasiAkun({ navigation }) {
  const user = useSelector((state) => state.user);

  const Component = (
    <>
      <Text style={styles.title}>Nama</Text>
      <Text style={styles.content}>{ user?.nama }</Text>
      <Text style={styles.title}>Email</Text>
      <Text style={styles.content}>{ user?.email }</Text>
      <Text style={styles.title}>Tanggal Lahir</Text>
      <Text style={styles.content}>{ user?.tanggal_lahir }</Text>
      <TextButton
        styleText={styles.button}
        onPress={() => navigation.navigate('Ubah Password')}
        text="Ganti Kata Sandi?"
      />
    </>
  );

  return <ViewContainer backgroundColor="white" component={Component} />;
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
