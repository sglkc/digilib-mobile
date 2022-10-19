import { useState } from 'react';
import {
  Image, Text, View, StyleSheet, TouchableHighlight, StatusBar
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import * as SecureStore from 'expo-secure-store';
import Button from '@/components/Button';

export default function DrawerContent() {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const items = [
    {
      icon: "person-outline",
      text: "Informasi Akun",
      function: () => navigation.navigate('InformasiAkun')
    },
    {
      icon: "notifications-outline",
      text: "Notifikasi",
      function: () => navigation.navigate('Notifikasi')
    },
    {
      icon: "history",
      text: "Riwayat",
      octicons: true,
      function: () => navigation.navigate('Riwayat')
    },
    { icon:"DIVIDER" },
    {
      icon: "chatbubble-ellipses-outline",
      text: "Umpan Balik",
      function: () => navigation.navigate('UmpanBalik')
    },
    {
      icon: "information-circle-outline",
      text: "Tentang Aplikasi",
      function: () => navigation.navigate('Tentang')
    },
  ];

  SecureStore.getItemAsync('user')
    .then((str) => setUser(JSON.parse(str)))
    .catch(console.error);

  return (
    <View style={{ paddingTop: StatusBar.currentHeight - 10, flex: 1 }}>
      <View>
        <Image
          style={styles.logo}
          source={require('assets/logo.png')}/>
        <View style={{ paddingLeft: 16, marginVertical: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: '800' }}>
            { user?.nama }
          </Text>
          <Text>{ user?.email }</Text>
        </View>
        <View style={styles.LineDivider} />
        {
          items.map((item, index) => {
            if (item.icon === 'DIVIDER') {
              return <View key={index} style={styles.LineDivider} />;
            }

            return (
              <TouchableHighlight
                key={index}
                underlayColor="#DDDDDD"
                style={styles.menuItem}
                onPress={item.function}
              >
                <View style={{ flexDirection: 'row' }}>
                  { item.octicons ?
                    <Octicons
                      style={{ alignSelf: 'center', marginHorizontal: 12 }}
                      name={item.icon}
                      size={20}
                      color="black"
                    />
                    :
                    <Icon
                      style={{ alignSelf: 'center', marginHorizontal: 8 }}
                      name={item.icon}
                      size={25}
                      color="black"
                    />
                  }
                  <Text style={styles.menuItemText}>{item.text}</Text>
                </View>
              </TouchableHighlight>
            );
          })
        }
        <View style={{ alignItems: 'center' }}>
          <Button
            style={styles.buttonContainer}
            styleButton={styles.button}
            styleText={styles.buttonText}
            onPress={() => navigation.navigate('Login')}
          >
            Keluar
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 8,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  menuItem: {
    paddingVertical: 14,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  menuItemText: {
    fontWeight: '700',
    marginLeft: 6,
    alignSelf: 'center',
    fontSize: 16,
  },
  LineDivider:{
    marginLeft: -8,
    marginVertical: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    marginTop: 24,
    width: '90%',
    borderRadius: 32,
    justifyContent: 'center',
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#3dd20e'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
