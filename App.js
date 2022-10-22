import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from '@/store';
import NativeStack from '@/router/NativeStack';
import { NODE_ENV } from '@env';

export default function App() {
  const [splash, setSplash] = useState(NODE_ENV !== 'development');

  useEffect(() => {
    setTimeout(() => setSplash(false), 5000);
  }, []);

  return (
    <SafeAreaProvider>
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
