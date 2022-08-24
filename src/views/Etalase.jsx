import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
  Button,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import BottomNavbar from '@/components/BottomNavbar';
import Icon from 'react-native-vector-icons/Feather';
import DrawerNavigationView from '@/components/DrawerNavigationView'
import CategoryScroller from "@/components/CategoryScroller";
import SortByComponent from "@/components/SortByComponent";
import Item from '@/components/Item';

export default function Etalase() {
  const navigation = useNavigation();
  const drawer = useRef(null);
  const quote = {
    text: 'Banyak jalan untuk mendekati Tuhan, sebanyak bilangan nafas' +
    ' para pencari Tuhan. Tapi jalan yang paling dekat pada Allah adalah' +
    ' membahagiakan orang lain di sekitarmu. Engkau berkhidmat kepada mereka.',
    source: 'Jalaluddin Rakhmat - The Road to Allah (hal.268)'
  };
  const items = [
    {
      cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
      title: 'Doa Bukan Lampu Aladin',
      author: 'Jalaluddin Rakhmat',
      category: ['Doa', 'Agama'],
      bookmark: false,
    },
    {
      cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v-3L7X7L07odE4h-saoSOQHaKF%26pid%3DApi&f=1',
      title: 'Meraih Cinta Ilahi',
      author: 'Jalaluddin Rakhmat',
      category: ['Agama'],
      bookmark: false,
    },
    {
      cover: 'https://img.yumpu.com/62913595/1/500x640/belajar-cerdas-belajar-berbasiskan-otak-pdfdrivecom-.jpg',
      title: 'Belajar Cerdas: Belajar Berbasiskan Otak',
      author: 'Jalaluddin Rakhmat',
      category: ['Sains dan Pendidikan'],
      bookmark: false,
    },
    {
      cover: 'https://1.bp.blogspot.com/-VeshmUawE5c/YIFK8hNU-KI/AAAAAAAAB9k/uQkTlWXDMoE3t59K7iAzKzXbmfFTeNo2QCLcBGAsYHQ/s457/DAHULUKAN%2BAKHLAK%2BDI%2BATAS%2BFIQIH.jpg',
      title: 'Dahulukan Akhlak Di Atas Fiqih',
      author: 'Jalaluddin Rakhmat',
      category: ['Agama'],
      bookmark: false,
    },
  ];

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={280}
      drawerPosition="left"
      renderNavigationView={() => (
        <DrawerNavigationView />
      )}
    >
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={styles.title.container}>
          <View style={styles.title.icons}>
            <TouchableOpacity
              style={{ paddingRight: 32 }}
              onPress={() => drawer.current.openDrawer()}
            >
              <Icon name="menu" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingLeft: 32 }}
              onPress={() => navigation.navigate('Pencarian')}
            >
              <Icon name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.quote.title}>Quotes Harian</Text>
            <View>
              <Text style={styles.quote.mark}>“</Text>
              <Text style={styles.quote.text}>{ quote.text }</Text>
              <Text style={[styles.quote.mark, { bottom: 0, right: 0 }]}>„</Text>
            </View>
            <Text style={styles.quote.source}>{ quote.source }</Text>
          </View>
        </View>
        <View style={styles.container}>
          <CategoryScroller style={{ flexGrow: 0 }} />
          <ScrollView style={styles.scroller}>
            <SortByComponent style={{ marginHorizontal: 8 }} />
            { items.map((item, index) => {
              return (
                <Item
                  key={index}
                  author={item.author}
                  bookmark={item.bookmark}
                  category={item.category}
                  cover={item.cover}
                  title={item.title}
                />
              );
            })
            }
            <View style={{ paddingVertical: 38 }} />
          </ScrollView>
          <View style={styles.bottom}>
            <BottomNavbar />
          </View>
        </View>
      </ImageBackground>
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  title: {
    container: {
      paddingTop: StatusBar.currentHeight + 16,
      paddingBottom: 16,
      paddingHorizontal: 24,
    },
    icons: {
      paddingBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  quote: {
    title: {
      fontWeight: 'bold',
      color: 'white',
    },
    mark: {
      position: 'absolute',
      color: '#eee',
      fontWeight: '800',
      fontSize: 32,
    },
    text: {
      marginVertical: 8,
      paddingTop: 16,
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      lineHeight: 22,
    },
    source: {
      marginTop: 8,
      fontWeight: '600',
      color: 'white',
    },
  },
  container: {
    paddingTop: 16,
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  scroller: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
