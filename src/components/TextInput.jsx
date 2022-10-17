import { StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

export default function ({
  hide,
  keyboardType,
  placeholder,
  style,
  onChangeText
}) {
  const dispatch = useDispatch()
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={[ defaultStyle, style ]}
      secureTextEntry={hide}
      onChangeText={onChangeText}
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
