import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from '@/views/Login';
import Register from '@/views/Register';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import { StackNavigator } from './src/router/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <StackNavigator />
        {/* <View style={styles.container}>
          <StatusBar style="auto" />
          <Login />
        </View> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: '#fff',
  },
});
