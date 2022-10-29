import { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { setItemType } from '@/store/ItemTypeReducer';

const types = ['Semua', 'Audio', 'Book', 'Video'];

export default function ItemType({ style }) {
  const selected = useSelector(state => state.itemType);
  const dispatch = useDispatch();

  return(
    <View style={[styles.container, style]}>
      { types.map((type, index) => (
        <View
          key={index}
          style={[
            styles.type, index === 0 && { marginLeft: 32 } ||
            index === types.length - 1 && { marginRight: 32 }
          ]}
        >
          <Pressable
            android_ripple={{ color: 'lightgrey' }}
            onPress={() => dispatch(setItemType(type.toLowerCase()))}
          >
            <Text
              style={[
                styles.text,
                selected === type.toLowerCase() && styles.selected
              ]}
            >
              {type}
            </Text>
          </Pressable>
        </View>
      )
      )}
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0
  },
  type: {
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
