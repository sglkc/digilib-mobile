import { Pressable, Text, ScrollView, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setType } from '@/store/ItemFilterReducer';

export default function ItemType({ style }) {
  const types = [
    { text: 'Semua', value: undefined },
    { text: 'Artikel', value: 'article' },
    { text: 'Audio', value: 'audio' },
    { text: 'Buku', value: 'book' },
    { text: 'Video', value: 'video' },
  ];
  const selected = useSelector(state => state.itemFilter.type);
  const dispatch = useDispatch();

  return(
    <ScrollView style={[styles.container, style]} horizontal={true}>
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
            onPress={() => dispatch(setType(type.value))}
          >
            <Text
              style={[
                styles.text,
                type.value === selected && styles.selected
              ]}
            >
              { type.text }
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
    flexGrow: 0,
  },
  type: {
    marginBottom: -16,
  },
  text: {
    padding: 16,
    fontSize: 16,
    fontWeight: '800',
    color: 'grey',
  },
  selected: {
    color: 'black',
    borderBottomColor:'orange',
    borderBottomWidth:  20,
  },
});
