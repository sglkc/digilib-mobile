import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { setOrder } from '@/store/ItemFilterReducer';

export default function ItemSort({ style }) {
  const order = useSelector(state => state.itemFilter.order);
  const dispatch = useDispatch();

  function toggleSort() {
    const toggle = order === 'Terbaru' ? 'Terlama' : 'Terbaru';
    dispatch(setOrder(toggle));
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Urutkan:</Text>
      <Pressable
        style={[styles.container, { padding: 8 }]}
        onPress={toggleSort}
        android_ripple={{ color: 'lightgrey' }}
      >
        <Icon name="align-left" size={26} />
        <Text style={styles.button}>{ order }</Text>
      </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: '700',
    color: 'grey',
  },
  button: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '700'
  }
});
