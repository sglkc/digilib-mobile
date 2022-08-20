import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ({ children, style, styleButton, styleText, onPress }) {
  return (
    <View style={[ styles.container, style ]}>
      <Pressable
        style={[ styles.container, styles.button, styleButton ]}
        onPress={onPress}
        android_ripple={{ color: 'grey', borderless: true }}
      >
        <Text style={[ styles.text, styleText ]}>
          { children }
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    marginTop: 0,
    marginBottom: 0,
    marginVertical: 0,
    paddingVertical: 16,
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
