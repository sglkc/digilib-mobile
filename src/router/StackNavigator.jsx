import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Etalase from '@/views/Etalase';
import InformasiAkun from '@/views/InformasiAkun';
import Notifikasi from '@/views/Notifikasi';
import UbahPassword from '@/views/UbahPassword';
import Tentang from '@/views/Tentang';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: '#fff',
    height: '100%',
  },
});

const FullscreenView = (children) => {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          { children }
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const EtalaseScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <Etalase></Etalase>
      </ImageBackground>
    </SafeAreaView>
  );
}

const InformasiAkunScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <InformasiAkun />
      </ImageBackground>
    </SafeAreaView>
  );
}

const NotifikasiScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <Notifikasi />
      </ImageBackground>
    </SafeAreaView>
  );
}

const UbahPasswordScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <UbahPassword />
      </ImageBackground>
    </SafeAreaView>
  );
}

const TentangScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <Tentang />
      </ImageBackground>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export const StackNavigator = ()=>{
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        options={{ headerShown: false }}
      >
        { () => FullscreenView(<Login />) }
      </Stack.Screen>
      <Stack.Screen
        name='Register'
        options={{ headerShown: false }}
      >
        { () => FullscreenView(<Register />) }
      </Stack.Screen>
      <Stack.Screen
        name='Etalase'
        component={EtalaseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='InformasiAkun'
        component={InformasiAkunScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='UbahPassword'
        component={UbahPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Notifikasi'
        component={NotifikasiScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Tentang'
        component={TentangScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
