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
import ViewContainer from '@/components/ViewContainer';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Etalase from '@/views/Etalase';
import InformasiAkun from '@/views/InformasiAkun';
import UbahInformasiAkun from '@/views/UbahInformasiAkun';
import UbahPassword from '@/views/UbahPassword';
import Notifikasi from '@/views/Notifikasi';
import UmpanBalik from '@/views/UmpanBalik';
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

const TitleView = (title, component) => (
  <ViewContainer title={title} component={component} />
);

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

const Stack = createNativeStackNavigator();

const views = [
  {
    name: 'Login',
    children: () => FullscreenView(<Login />)
  },
  {
    name: 'Register',
    children: () => FullscreenView(<Register />)
  },
  {
    name: 'Etalase',
    component: EtalaseScreen,
  },
  {
    name: 'InformasiAkun',
    children: () => TitleView('Informasi Akun', <InformasiAkun />)
  },
  {
    name: 'UbahInformasiAkun',
    children: () => TitleView('Ubah Informasi Akun', <UbahInformasiAkun />)
  },
  {
    name: 'UbahPassword',
    children: () => TitleView('Ubah Kata Sandi', <UbahPassword />)
  },
  {
    name: 'Notifikasi',
    children: () => TitleView('Notifikasi', <Notifikasi />)
  },
  {
    name: 'UmpanBalik',
    children: () => TitleView('Umpan Balik', <UmpanBalik />)
  },
  {
    name: 'Tentang',
    children: () => TitleView('Tentang Aplikasi', <Tentang />)
  },
];

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      { views.map((view, index) => {
        return (
          <Stack.Screen
            name={view.name}
            component={view.component}
            key={index}
            options={{ headerShown: false }}
          >
            { view.children }
          </Stack.Screen>
        );
      })
      }
    </Stack.Navigator>
  );
}
