import { Pressable, StyleSheet, Text } from 'react-native';

export default function ({ children, style, styleText, onPress }) {
  return (
    <Pressable style={[ styles.button, style ]} onPress={onPress}>
      <Text style={[ styles.text, styleText ]}>
        { children }
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 32,
    width: '100%',
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
