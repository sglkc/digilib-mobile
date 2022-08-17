import { StyleSheet, TextInput } from 'react-native';

export default function ({ hide, placeholder, style }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[ defaultStyle, style ]}
      secureTextEntry={hide}
    />
  );
}

const defaultStyle = StyleSheet.create({
  paddingVertical: 12,
  paddingHorizontal: 32,
  backgroundColor: '#ddd',
  borderRadius: 32,
  width: '100%',
  fontSize: 16,
});
