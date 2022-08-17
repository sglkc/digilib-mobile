import { Pressable, Text } from 'react-native';

export default function ({ children, style, styleText, onPress }) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={[ { fontSize: 16 }, styleText ]}>
        { children }
      </Text>
    </Pressable>
  );
}
