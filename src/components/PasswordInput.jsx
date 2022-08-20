import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import TextInput from '@/components/TextInput';
import Eye from 'assets/eye.png';
import EyeSlash from 'assets/eye-slash.png';

export default function ({ placeholder, style }) {
  const [hide, setHide] = useState(true);
  const [icon, setIcon] = useState(EyeSlash);
  const toggleHide = () => {
    setHide(!hide);
    setIcon(hide ? Eye : EyeSlash);
  }

  return (
    <View style={[ styles.container, style ]}>
      <TextInput
        hide={hide}
        placeholder={placeholder || 'Kata Sandi'}
      />
      <Pressable style={styles.button} onPress={toggleHide}>
        <Image style={styles.icon} source={icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  button: {
    padding: 16,
    position: 'absolute',
    right: 0,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
