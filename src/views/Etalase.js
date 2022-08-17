import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View, DrawerLayoutAndroid, Button } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import Icon from 'react-native-vector-icons/Feather';
import ScrollViewItems from '@/components/ScrollViewItems';
export default function Etalase() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (

    <ImageBackground source={require('@/assets/BG_ORANGE.png')} style={{width: '100%', height: '100%'}}>
          <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
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
      </DrawerLayoutAndroid>
    </ImageBackground>
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
