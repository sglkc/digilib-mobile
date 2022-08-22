import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from '@/router/StackNavigator';
import Login from '@/views/Login';
import Register from '@/views/Register';
import SplashScreen from '@/views/SplashScreen';

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        { splash && <SplashScreen /> }
        { !splash && <StackNavigator /> }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const container = StyleSheet.create({
  paddingHorizontal: 32,
  paddingVertical: 64,
  backgroundColor: '#fff',
});
