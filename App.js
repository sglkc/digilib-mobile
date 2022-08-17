import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    <View>
      <StatusBar style="auto" />
      { splash && <SplashScreen /> }
      { !splash &&
        <View style={container}>
          <Login />
        </View>
      }
    </View>
  );
}

const container = StyleSheet.create({
  paddingHorizontal: 32,
  paddingVertical: 64,
  backgroundColor: '#fff',
});
