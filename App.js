import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Register from './src/components/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: '#fff',
  },
});
