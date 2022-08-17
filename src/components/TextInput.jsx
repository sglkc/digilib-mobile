import { StyleSheet, TextInput } from 'react-native';

export default function ({ hide, placeholder, style }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[ styles.input, style ]}
      secureTextEntry={hide}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#ddd',
    borderRadius: 32,
    width: '100%',
    fontSize: 16,
  },
});
