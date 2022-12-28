import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ({ style, styleText, text, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[styles.text, styleText]}>{ text }</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'orange',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: '500',
    color: '#333',
  },
});
