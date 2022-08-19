import {
  Image, Text, View, StyleSheet, Button, TouchableHighlight, StatusBar
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const items = [
  {
    icon: "person-outline",
    text: "Informasi Akun",
    function: ()=>console.log('nicee')
  },
  {
    icon: "notifications-outline",
    text: "Notifikasi",
    function: ()=>console.log('nicee')
  },
  {
    icon: "history",
    text: "Riwayat",
    octicons: true,
    function: ()=>console.log('nicee')
  },
  {
    icon:"DIVIDER"
  },
  {
    icon: "chatbubble-ellipses-outline",
    text: "Umpan Balik",
    function: ()=>console.log('nicee')
  },
  {
    icon: "information-circle-outline",
    text: "Tentang Aplikasi",
    function: ()=>console.log('nicee')
  },
]

export default function DrawerContent() {
  const navigation = useNavigation();

  return (
    <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <View>
        <Image
          style={styles.logo}
          source={require('assets/logo.png')}/>
        <View style={{ paddingLeft: 16, marginVertical: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: '800' }}>Nama</Text>
          <Text>nama@email.com</Text>
        </View>
        <View style={styles.LineDivider} />
        <View style={{ paddingLeft: 8 }}>
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
                      ></Octicons>
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
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Keluar</Text>
          </TouchableHighlight>
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
    borderRadius: 16,
    paddingVertical: 14,
  },
  menuItemText: {
    fontWeight: '700',
    marginLeft: 5,
    alignSelf: 'center',
    fontSize: 16,
  },
  LineDivider:{
    marginLeft: -8,
    marginVertical: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    marginTop: 24,
    width: '90%',
    height: 38,
    backgroundColor: '#39CA0D',
    borderRadius: 32,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})
