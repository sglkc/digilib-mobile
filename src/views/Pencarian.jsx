import { useState, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemScroller from '@/components/ItemScroller';
import ItemSort from '@/components/ItemSort';
import ItemType from '@/components/ItemType';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function PencarianView() {
  const search = useRef('');
  const [url, setUrl] = useState(
    Axios.getUri({ url: '/items' })
  );

  function searchText() {
    setUrl(
      Axios.getUri({
        url: '/items', params: { search: search.current }})
    );
  }

  const Component = (
    <>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.box}
          placeholder="Ketik yang Anda cari disini"
          onChangeText={(val) => (search.current = val)}
          onSubmitEditing={searchText}
        />
        <Pressable
          style={styles.input.button}
          android_ripple={{ color: '#fff', borderless: true }}
          onPress={searchText}
        >
          <Icon name="search" size={30} color="#333" />
        </Pressable>
      </View>
      <ItemType />
      <ItemSort style={{ marginHorizontal: 32 }} />
      <ItemScroller url={url} noBottom />
    </>
  );

  return <ViewContainer component={Component} noPadding />
}

const styles = StyleSheet.create({
  input: {
    container: {
      marginHorizontal: 32,
      marginTop: 16,
      marginBottom: 8,
      flexDirection: 'row',
    },
    box: {
      paddingVertical: 12,
    },
    button: {
      padding: 10,
      position: 'absolute',
      right: 0,
    },
  },
});
