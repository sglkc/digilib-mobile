import { useState } from "react";
import {
  Pressable,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentMenu } from '@/store/MenuListReducer';

const categories = [
  { name: 'Semua', function: () => console.log(index) },
  { name: 'Audio', function: () => console.log(index) },
  { name: 'Buku', function: () => console.log(index) },
  { name: 'Video', function: () => console.log(index) },
  { name: 'Lainnya', function: () => console.log(index) },
]

export default function EtalaseCategory({ style }) {
  const val = useSelector(state => state.menu);
  const selectd = val.menu;
  const dispatch = useDispatch();

  return(
    <ScrollView style={[styles.container, style]} horizontal={true}>
      { categories.map((category, index) => (
        <View
          key={index}
          style={[styles.category, index === 0 && { marginLeft: 32 } ||
            index === categories.length - 1 && { marginRight: 32 }
          ]}
        >
          <Pressable
            android_ripple={{ color: 'lightgrey' }}
            onPress={() => dispatch(setCurrentMenu(index))}
          >
            <Text
              style={[styles.text, selectd === index && styles.selected]}
            >
              {category.name}
            </Text>
          </Pressable>
        </View>
      )
      )}
    </ScrollView>
  )}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  category: {
    marginHorizontal: 8,
  },
  text: {
    padding: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: '800',
    color: 'grey',
  },
  selected: {
    color: 'black',
    borderBottomColor:'orange',
    borderBottomWidth:  4,
  },
});
