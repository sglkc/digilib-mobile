import { StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {setCurrentUser} from '@/state/reducers/UserReducer.js';

export default function ({ hide, placeholder, style }) {
  const dispatch = useDispatch() 
  return (
    <TextInput
      placeholder={placeholder}
      style={[ defaultStyle, style ]}
      secureTextEntry={hide}
      onChangeText={text=>dispatch(setCurrentUser({key:'name', payload: text}))}
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
