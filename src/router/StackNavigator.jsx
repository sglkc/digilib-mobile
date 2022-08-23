import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Etalase from '@/views/Etalase';
import Tandai from '@/views/Tandai';
import Kategori from '@/views/Kategori';
import Pencarian from '@/views/Pencarian';
import InformasiAkun from '@/views/InformasiAkun';
import UbahInformasiAkun from '@/views/UbahInformasiAkun';
import UbahPassword from '@/views/UbahPassword';
import Notifikasi from '@/views/Notifikasi';
import Riwayat from '@/views/Riwayat';
import UmpanBalik from '@/views/UmpanBalik';
import Tentang from '@/views/Tentang';
import TextButton from '@/components/TextButton';
import ViewContainer from '@/components/ViewContainer';
import GlobalStyles from '@/func/GlobalStyles';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: '#fff',
    height: '100%',
  },
});

const EtalaseScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <Etalase />
      </ImageBackground>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const navigation = useNavigation();
  const SearchButton = (
    <TouchableOpacity onPress={() => navigation.navigate('Pencarian')}>
      <Icon name="search" size={25} color="white" />
    </TouchableOpacity>
  );
  const views = [
    {
      name: 'Login',
      component: () => (
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={style.container}>
              <Login />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      )
    },
    {
      name: 'Register',
      component: () => (
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={style.container}>
              <Register />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      )
    },
    {
      name: 'Etalase',
      component: EtalaseScreen,
    },
    {
      name: 'Tandai',
      container: {
        title: 'Tandai',
        component: <Tandai />,
        collapsed: true,
        button: SearchButton,
      },
    },
    {
      name: 'Kategori',
      container: {
        title: 'Kategori',
        component: <Kategori />,
        collapsed: true,
        button: SearchButton,
      },
    },
    {
      name: 'InformasiAkun',
      container: {
        title: 'Informasi Akun',
        component: <InformasiAkun />,
        button: (
          <TextButton
            styleText={{ color: 'white', fontWeight: '600' }}
            text="Ubah"
            onPress={() => navigation.navigate('UbahInformasiAkun')}
          />
        ),
      },
    },
    {
      name: 'UbahInformasiAkun',
      container: {
        title: 'Ubah Informasi Akun',
        component: <UbahInformasiAkun />,
      },
    },
    {
      name: 'UbahPassword',
      container: {
        title: 'Ubah Password',
        component: <UbahPassword />,
      },
    },
    {
      name: 'Notifikasi',
      container: {
        title: 'Notifikasi',
        component: <Notifikasi />,
      },
    },
    {
      name: 'Riwayat',
      container: {
        title: 'Riwayat',
        component: <Riwayat />,
        collapsed: true,
        button: SearchButton,
      },
    },
    {
      name: 'Pencarian',
      container: {
        title: 'Pencarian',
        component: <Pencarian />,
        collapsed: true,
        style: { paddingHorizontal: 16 },
      },
    },
    {
      name: 'UmpanBalik',
      container: {
        title: 'Umpan Balik',
        component: <UmpanBalik />,
      },
    },
    {
      name: 'Tentang',
      container: {
        title: 'Tentang',
        component: <Tentang />,
      },
    },
  ];

  return (
    <Stack.Navigator initialRouteName='Login'>
      { views.map((view, index) => {
        return (
          <Stack.Screen
            name={view.name}
            key={index}
            options={{ headerShown: false }}
          >
            { view.component || view.container && function () {
              return (
                <ViewContainer
                  button={view.container.button}
                  collapsed={view.container.collapsed}
                  component={view.container.component}
                  style={view.container.style}
                  title={view.container.title}
                />
              )
            }}
          </Stack.Screen>
        );
      })
      }
    </Stack.Navigator>
  );
}
