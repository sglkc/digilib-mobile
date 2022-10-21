import { useEffect, useState } from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import Item from '@/components/Item';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

const defaultState = { count: 0, items: [], page: 1, refreshing: false };

export default function ItemScroller({ bottomPadding, style }) {
  const [state, setState] = useState(defaultState);

  useEffect(getItems, [state.refreshing]);

  function getItems() {
    if (state.items.length > state.count) return;

    Axios.get('/items', { params: { page: state.page, limit: 10 } })
      .then((res) => {
        const items = state.refreshing
          ? res.data.result
          : state.items.concat(res.data.result);
        const page = state.refreshing ? 1 : state.page + 1;

        setState({ count: res.data.count, items, page, refreshing: false });
      })
      .catch(console.error);
  }

  return (
    <VirtualizedList
      style={style}
      data={state.items}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
      keyExtractor={(item) => item.item_id+Math.random()}
      ListEmptyComponent={(
        <Text style={{ marginTop: 16, textAlign: 'center' }}>
          <Spinner color="black" />
          { '\n' }
          <Text style={{ fontWeight: 'bold' }}>Sedang mengunduh data...</Text>
          { '\n\n' }
          <Text>
            Jika berlangsung lama, pastikan Anda terhubung ke koneksi internet
          </Text>
        </Text>
      )}
      ListFooterComponent={<>
        { state.items.length < state.count && <Spinner color="black" /> }
        { bottomPadding && <View style={{ marginBottom: 72 }} /> }
      </>}
      onRefresh={() => setState(defaultState)}
      onEndReached={getItems}
      onEndReachedThreshold={0.15}
      refreshing={state.refreshing}
      renderItem={({ item }) => (
        <Item
          author={item.author}
          bookmark={item.bookmark || false}
          category={item.Categories.map((category) => category.name)}
          cover={Axios.getUri({ url: '/files/cover/' }) + item.cover}
          title={item.title}
        />
      )}
    />
  );
}
