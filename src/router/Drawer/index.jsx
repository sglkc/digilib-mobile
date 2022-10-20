import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Etalase from '@/views/Etalase';
import Notifikasi from '@/views/Notifikasi';
import InformasiAkun from '@/views/InformasiAkun';
import Riwayat from '@/views/Riwayat';
import UmpanBalik from '@/views/UmpanBalik';
import Tentang from '@/views/Tentang';
import DrawerContent from './DrawerContent';
import Header from './Header';

const Drawer = createDrawerNavigator();
const screens = [
  {
    name: 'Etalase',
    component: Etalase,
    options: {
      hideTitle: true,
      drawerItemStyle: { display: 'none' },
    }
  },
  {
    name: 'Informasi Akun',
    component: InformasiAkun,
    options: {
      drawerIcon: () => <Icon name="account-outline" size={25} color="black" />,
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
      drawerIcon: () => <Icon name="bell-outline" size={25} color="black" />
    }
  },
  {
    name: 'Riwayat',
    component: Riwayat,
    options: {
      drawerIcon: () => <Icon name="history" size={25} color="black" />
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
      drawerIcon: () => (
        <Icon name="message-processing-outline" size={25} color="black" />
      )
    }
  },
  {
    name: 'Tentang',
    component: Tentang,
    options: {
      drawerIcon: () => <Icon name="information-outline" size={25} color="black" />
    }
  },
];

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
      { screens.map((props, key) => <Drawer.Screen key={key} {...props} />) }
    </Drawer.Navigator>
  );
}
