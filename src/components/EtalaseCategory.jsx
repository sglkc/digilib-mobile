import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableNativeFeedback
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentMenu } from '@/state/reducers/MenuListReducer.js';

const Lists = [
  {name: 'Semua', function: () => console.log(index)},
  {name: 'Audio', function: () => console.log(index)},
  {name: 'Buku', function: () => console.log(index)},
  {name: 'Video', function: () => console.log(index)},
  {name: 'Video', function: () => console.log(index)},
]

export default function EtalaseCategory() {
  const val = useSelector(state => state.menu);
  const selectd = val.menu;
  const dispatch = useDispatch();

  return(
    <ScrollView
      horizontal={true}
      style={{
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        padding: 9
      }}
    >
      <View style={{marginTop:1,flexDirection:'row'}}>
        {Lists.map((data, index)=>{
          return(
            <TouchableNativeFeedback
              key={index}
              onPress={() => dispatch(setCurrentMenu(index))}
            >
              <Text style={
                selectd == index ? styles.gridNavSelected : styles.gridNav}>
                {data.name}
              </Text>
            </TouchableNativeFeedback>
          )
        })}
      </View>
    </ScrollView>
  )}

const styles = StyleSheet.create({
  gridNav: {
    fontWeight:'700',
    color: 'grey',
    marginHorizontal: 20
  },
  underline: {textDecorationLine: 'underline'},
  gridNavSelected: {
    fontWeight:'700',
    color: 'black',
    marginHorizontal: 20,
    borderBottomColor:'#ffb901',
    borderBottomWidth:  2},
});
