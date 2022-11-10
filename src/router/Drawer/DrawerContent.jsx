import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import * as SecureStore from 'expo-secure-store';
import Button from '@/components/Button';

export default function DrawerContent(props) {
  const user = useSelector((state) => state.user);

  function logout() {
    SecureStore.deleteItemAsync('token')
      .then(() => false)
      .catch(() => false)
      .finally(() => props.navigation.navigate('Login'));
  }

  return (
    <DrawerContentScrollView {...props}>
      <Image style={styles.logo} source={require('assets/logo.png')} />
      <View style={{ paddingLeft: 16, marginVertical: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '800' }}>{ user?.nama }</Text>
        <Text>{ user?.email }</Text>
      </View>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
      <View style={{ alignItems: 'center' }}>
        <Button
          style={styles.buttonContainer}
          styleButton={styles.button}
          styleText={styles.buttonText}
          onPress={logout}
        >
          Keluar
        </Button>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginVertical: 8,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  divider: {
    marginTop: 8,
    marginBottom: 16,
    height: 1,
    backgroundColor: 'grey',
  },
  buttonContainer: {
    marginTop: 16,
    width: '90%',
    borderRadius: 32,
    justifyContent: 'center',
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#3dd20e'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
