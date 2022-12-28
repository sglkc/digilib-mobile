import { StyleSheet, Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import ViewContainer from '@/components/ViewContainer';

export default function UmpanBalikView() {
  const Component = (
    <>
      <Text style={styles.text}>
        Jangan ragu untuk menghubungi kami untuk pertanyaan Anda. Hubungi kami
        di kontak dibawah ini.
      </Text>
      <View style={styles.emailContainer}>
        <Octicons style={styles.emailIcon} name="mail" size={32} color="black" />
        <View>
          <Text style={{ fontWeight: 'bold' }}>Email</Text>
          <Text style={styles.emailText}>info@jalanrahmat.com</Text>
        </View>
      </View>
    </>
  );

  return <ViewContainer component={Component} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  emailContainer: {
    marginTop: 32,
    flexDirection: 'row',
  },
  emailIcon: {
    marginRight: 16,
    alignSelf: 'center',
  },
  emailText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
