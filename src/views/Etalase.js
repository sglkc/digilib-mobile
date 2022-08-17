import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View, DrawerLayoutAndroid, Button } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import Icon from 'react-native-vector-icons/Feather';
import ScrollViewItems from '@/components/ScrollViewItems';
import DrawerNavigationView from '@/components/DrawerNavigationView'

export default function Etalase() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <DrawerNavigationView Keluar={()=>console.log('it work')}/>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={280}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={{position: 'absolute', left: 10, top: 25, borderRadius: 9, padding: 5, width:5}}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => drawer.current.openDrawer()}>
            <Icon name="menu" size={35} color="#FFFF" style={styles.IconContainer}/>
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute', right: 15, top: 30,}}>
          <Icon name="search" size={25} color="#FFFF" />
        </View>

        <View style={{
          flex: 1,
          marginBottom: 0,
          alignItems: 'center'
        }}>
          <ScrollViewItems />
          <View style={{backgroundColor:'white', width:'100%', alignItems: 'center',}}>
          <BottomNavbar />
          </View>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  IconContainer:{
    width:30,
    height:30,
},
navigationContainer: {
  backgroundColor: "#ecf0f1"
},
paragraph: {
  padding: 16,
  fontSize: 15,
  textAlign: "center"
}
});
