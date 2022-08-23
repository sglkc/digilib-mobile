import React, { useRef, useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View, DrawerLayoutAndroid, Button, StatusBar } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import Icon from 'react-native-vector-icons/Feather';
import ScrollViewItems from '@/components/ScrollViewItems';
import DrawerNavigationView from '@/components/DrawerNavigationView'
import EtalaseCategory from "../components/EtalaseCategory";
import SortByComponent from "../components/SortByComponent";
import { useSelector, useDispatch } from 'react-redux'
const text = "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."
export default function Etalase() {
  const val = useSelector(state=>state.user)
  const data = val.name
  console.log(data)
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <DrawerNavigationView Keluar={()=>console.log('it work')}/>
    </View>
  );
  console.log(StatusBar.currentHeight)
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={280}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={{position: 'absolute', left: 10, top: 25, borderRadius: 9, padding: 5, width:5, height:5}} onPress={() => drawer.current.openDrawer()}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            
          >
            <Icon name="menu" size={35} color="#FFFF" style={styles.IconContainer}/>
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute', right: 15, top: 30,}}>
          <Icon name="search" size={25} color="#FFFF" onPress={() => console.log('i pressed')}/>
        </View>
        <Text style={{paddingTop: StatusBar.currentHeight+60, marginLeft: 18, fontWeight:'700', color:'white'}}>Quotes Harian</Text>
        <View style={{
          flex: 1,
          marginBottom: 0,
          alignItems: 'center'
        }}>
          <View style={{ alignSelf: 'center', maxWidth:'100%', marginHorizontal:9 ,zIndex: 3, elevation: 3, marginTop:10 }}>
            <Text style={{color: '#ffffff'}}>
              {'"' + text +'"'}
            </Text>
          </View>

          <View style={{marginTop: StatusBar.currentHeight+ StatusBar.currentHeight-4, width:'100%', flex:1}}>
            <Text>quote here</Text>
            <EtalaseCategory />
            <SortByComponent />
            <ScrollViewItems />
          </View>
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
    marginTop: -StatusBar.currentHeight
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
