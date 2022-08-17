import { Image, StyleSheet, View } from 'react-native';

export default function () {
  return (
    <Image
      style={image}
      source={require('assets/splash.gif')}
      resizeMode="contain"
    />
  );
}

const image = StyleSheet.create({
  margin: 0,
  width: '100%',
  height: '100%',
});
