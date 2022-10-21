import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '@/views/Detail';
import DetailItem from '@/views/DetailItem';
import Etalase from '@/views/Etalase';
import InformasiAkun from '@/views/InformasiAkun';
import Jelajahi from '@/views/Jelajahi';
import Kategori from '@/views/Kategori';
import Notifikasi from '@/views/Notifikasi';
import Pencarian from '@/views/Pencarian';
import Riwayat from '@/views/Riwayat';
import UbahInformasiAkun from '@/views/UbahInformasiAkun';
import UbahPassword from '@/views/UbahPassword';
import UmpanBalik from '@/views/UmpanBalik';
import Tandai from '@/views/Tandai';
import Tentang from '@/views/Tentang';
import PDFReader from '@/components/DetailItem/PDFReader';
import DrawerContent from './DrawerContent';
import Header from './Header';

const Drawer = createDrawerNavigator();
const screens = {
  shown: [
    {
      name: 'Etalase',
      component: Etalase,
      options: {
        drawerItemStyle: { display: 'none' },
        hideBanner: true,
        hideTitle: true,
        menuButton: true,
        searchButton: true
      }
    },
    {
      name: 'Informasi Akun',
      component: InformasiAkun,
      options: {
        expand: true,
        drawerIcon: () => (
          <Icon name="account-outline" size={25} color="black" />
        ),
        headerStyle: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    {
      name: 'Notifikasi',
      component: Notifikasi,
      options: {
        expand: true,
        drawerIcon: () => <Icon name="bell-outline" size={25} color="black" />
      }
    },
    {
      name: 'Riwayat',
      component: Riwayat,
      options: {
        drawerIcon: () => <Icon name="history" size={25} color="black" />,
        searchButton: true,
      }
    },
    {
      name: 'Divider',
      component: Etalase,
      options: {
        drawerItemStyle: {
          marginHorizontal: -8,
          marginVertical: 16,
          height: 1,
          backgroundColor: 'grey',
        }
      }
    },
    {
      name: 'Umpan Balik',
      component: UmpanBalik,
      options: {
        expand: true,
        drawerIcon: () => (
          <Icon name="message-processing-outline" size={25} color="black" />
        )
      }
    },
    {
      name: 'Tentang Aplikasi',
      component: Tentang,
      options: {
        expand: true,
        drawerLabel: 'Tentang',
        drawerIcon: () => (
          <Icon name="information-outline" size={25} color="black" />
        )
      }
    },
  ],
  hidden: [
    { name: 'Detail', component: Detail },
    { name: 'DetailItem', component: DetailItem },
    { name: 'Jelajahi', component: Jelajahi },
    { name: 'Kategori', component: Kategori },
    { name: 'Pencarian', component: Pencarian },
    { name: 'PDF Reader', component: PDFReader },
    { name: 'Tandai', component: Tandai },
    {
      name: 'Ubah Informasi Akun',
      component: UbahInformasiAkun,
      options: { expand: true }
    },
    {
      name: 'Ubah Password',
      component: UbahPassword,
      options: { expand: true }
    },
  ]
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Default"
      screenOptions={{
        drawerActiveBackgroundColor: '#0000001f',
        drawerLabelStyle: {
          marginLeft: -16,
          fontSize: 16,
          color: 'black',
          fontWeight: '700'
        },
        header: Header
      }}
    >
      { screens.shown.map((props, key) => (
        <Drawer.Screen key={key} {...props} />
      ))
      }
      { screens.hidden.map((props, key) => (
        <Drawer.Screen
          key={key}
          {...props}
          options={{ drawerItemStyle: { display: 'none' }, ...props.options }}
        />
      ))
      }
    </Drawer.Navigator>
  );
}
