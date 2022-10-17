import { StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

export default function ({
  editable,
  hide,
  keyboardType,
  placeholder,
  style,
  value,
  onChangeText
}) {
  const dispatch = useDispatch()
  return (
    <TextInput
      editable={editable}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={[ defaultStyle, style ]}
      secureTextEntry={hide}
      value={value}
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
