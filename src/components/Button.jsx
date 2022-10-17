import { Pressable, StyleSheet, Text, View } from 'react-native';
import Spinner from '@/components/Spinner';

export default function ({
  children, text, style, styleButton, styleText, loading, onPress
}) {
  return (
    <View style={[ styles.container, style ]}>
      <Pressable
        style={[ styles.container, styles.button, styleButton ]}
        onPress={onPress}
        android_ripple={{ color: 'silver', borderless: true }}
        disabled={loading}
      >
        { loading && <Spinner /> }
        { !loading &&
          <Text style={[ styles.text, styleText ]}>
            { text || children }
          </Text>
        }
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
