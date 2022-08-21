import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ({ style, text, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        android_ripple={{ color: 'lightgrey', borderless: true }}
        style={styles.button}
      >
        <Text style={styles.text}>{ text }</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'orange',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: '800',
    color: '#333',
  },
});
