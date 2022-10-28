import { StyleSheet, TextInput } from 'react-native';

export default function CustomTextInput(props) {
  return (
    <TextInput
      {...props}
      style={[ defaultStyle, props.style ]}
      secureTextEntry={props.hide}
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
