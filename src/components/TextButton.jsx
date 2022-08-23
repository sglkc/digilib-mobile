import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function ({ children, style, styleText, text, onPress }) {
  const [underline, setTextStyle] = useState({});

  return (
    <Pressable
      style={style}
      onPress={onPress}
      onPressIn={() => setTextStyle({ textDecorationLine: 'underline' })}
      onPressOut={() => setTextStyle({})}
    >
      <Text style={[ { fontSize: 16 }, underline, styleText ]}>
        { children || text }
      </Text>
    </Pressable>
  );
}
