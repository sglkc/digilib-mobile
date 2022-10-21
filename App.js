import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '@/store';
import NativeStack from '@/router/NativeStack';
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
        <Provider store={store}>
          <NativeStack />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
