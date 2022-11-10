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
  const [isHome, setHome]= useState(false);
  const onStateChange = ({ routes }) => {
    setHome(routes[routes.length - 1].name === 'Home');
  }

  useEffect(() => {
    setTimeout(() => setSplash(false), 5000);
  }, []);

  return (
    <SafeAreaProvider>
    <StatusBar translucent={isHome} style={isHome ? 'dark' : 'light'} />
      <NavigationContainer onStateChange={onStateChange}>
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
