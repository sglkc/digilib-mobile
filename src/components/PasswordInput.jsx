import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInput from '@/components/TextInput';

export default function ({ placeholder, style, onChangeText }) {
  const [hide, setHide] = useState(true);
  const [icon, setIcon] = useState('eye-off');
  const toggleHide = () => {
    setHide(!hide);
    setIcon(hide ? 'eye' : 'eye-off');
  }

  return (
    <View style={[ styles.container, style ]}>
      <TextInput
        pattern=".{6,}"
        title="Password terdiri dari minimal 6 karakter"
        hide={hide}
        placeholder={placeholder || 'Kata Sandi'}
        onChangeText={onChangeText}
      />
      <Pressable style={styles.button} onPress={toggleHide}>
        <Icon name={icon} size={30} color="#333b" />
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
});
