import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Jangan ragu untuk menghubungi kami untuk pertanyaan Anda. Hubungi kami
        di kontak dibawah ini.
      </Text>
      <View style={styles.emailContainer}>
        <Octicons style={styles.emailIcon} name="mail" size={32} color="black" />
        <View>
          <Text style={{ fontWeight: '600' }}>Email</Text>
          <Text
            style={{ fontSize: 16, fontWeight: '700', color: 'green' }}
          >
            info@jalanrahmat.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200, // TODO: header component
    padding: 32,
    backgroundColor: '#fff',
    height: '100%',
  },
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
  }
});
