import { useCallback, useEffect, useState } from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import Item from '@/components/Item';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

const defaultState = {
  count: 0,
  items: [],
  page: 1,
  refreshing: false,
  error: false
};

export default function ItemScroller({ bottomPadding, url, style }) {
  const [state, setState] = useState(defaultState);
  const coverUrl = Axios.getUri({ url: '/files/cover/' });
  const props = {
    getItem: useCallback((data, index) => data[index], []),
    getItemCount: useCallback((data) => data.length, []),
    getItemLayout: useCallback((data, index) => ({
      length: 100,
      offset: 100 * index,
      index
    }), []),
    keyExtractor: useCallback((item) => item.item_id, []),
    ListEmptyComponent: (
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        { state.error ?
          <Text style={{ fontWeight: 'bold' }}>
            Terjadi error, mohon coba lagi nanti
          </Text>
          :
          <>
            <Spinner color="black" />
            { '\n' }
            <Text style={{ fontWeight: 'bold' }}>Sedang mengunduh data...</Text>
            { '\n\n' }
            <Text>
              Jika berlangsung lama, pastikan Anda terhubung ke koneksi internet
            </Text>
          </>
        }
      </Text>
    ),
    ListFooterComponent: (
      <>
        { state.items.length < state.count && <Spinner color="black" /> }
        { bottomPadding && <View style={{ marginBottom: 72 }} /> }
      </>
    ),
    onRefresh: () => setState({ ...defaultState, refreshing: true }),
    renderItem: useCallback(({ item }) => (
      <Item
        author={item.author}
        bookmark={item.bookmark || false}
        category={item.Categories.map((category) => category.name)}
        cover={coverUrl + item.cover}
        title={item.title}
      />
    ), []),
  };

  useEffect(getItems, [state.refreshing]);

  function getItems() {
    if (state.items.length >= state.count && state.count !== 0) return;

    Axios.get(url, { params: { page: state.page, limit: 10 } })
      .then((res) => {
        const lazy = state.items[0]?.item_id === res.data.result[0].item_id;
        const items = state.refreshing || lazy
          ? res.data.result
          : state.items.concat(res.data.result);
        const page = state.refreshing ? 1 : state.page + 1;

        setState({ ...defaultState, count: res.data.count, items, page });
      })
      .catch(() => setState({ ...defaultState, error: true }));
  }

  return (
    <VirtualizedList
      style={[style, { paddingHorizontal: 24 }]}
      data={state.items}
      onEndReached={getItems}
      onEndReachedThreshold={0.15}
      refreshing={state.refreshing}
      {...props}
    />
  );
}
