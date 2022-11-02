import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from '@/store';
import NativeStack from '@/router/NativeStack';

export default function App() {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => setSplash(false), 5000);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar translucent={true} />
      <NavigationContainer>
        <Provider store={Store}>
          { splash ?
            <Image
              style={{ margin: 0, width: '100%', height: '100%' }}
              source={require('assets/splash.gif')}
              resizeMode="contain"
            />
            :
            <NativeStack />
          }
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
