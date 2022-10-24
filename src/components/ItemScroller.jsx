import { useCallback, useEffect, useState } from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Item from '@/components/Item';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

export default function ItemScroller({ bottomPadding, url, style }) {
  const defaultState = {
    count: 0,
    items: [],
    page: 1,
    error: false
  };
  const [state, setState] = useState(defaultState);
  const [shouldUpdate, setUpdate] = useState(false);
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
      <Text
        style={{
          marginTop: state.error ? 32 : 72,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold'
        }}
      >
        { state.error === 'PAGE_EMPTY' ?
          <Text>Halaman ini kosong</Text>
          : state.error ?
            <Text>Terjadi error, mohon coba lagi nanti</Text>
            :
            <>
              <Text>Sedang mengunduh data...{'\n\n'}</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal' }}>
                Jika berlangsung lama, pastikan Anda terhubung ke koneksi
                internet
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
    onRefresh: () => setUpdate(true),
    renderItem: useCallback(({ item }) => (
      <Item
        author={item.author}
        bookmark={item.Bookmark}
        category={item.Categories.map((category) => category.name)}
        cover={item.cover}
        id={item.item_id}
        title={item.title}
      />
    ), []),
  };

  useEffect(getItems, [shouldUpdate]);
  useFocusEffect(useCallback(() => {
    setState({ ...defaultState });
    setUpdate(true);
  }, []));

  function getItems() {
    if (!shouldUpdate) return;
    if (state.items.length >= state.count && state.count !== 0) return;

    Axios.get(url, { params: { page: state.page, limit: 10 } })
      .then((res) => {
        const lazy = state.items[0]?.item_id === res.data.result[0].item_id;
        const items = shouldUpdate || lazy
          ? res.data.result
          : state.items.concat(res.data.result);
        const page = shouldUpdate ? 1 : state.page + 1;

        setState({ ...defaultState, count: res.data.count, items, page });
      })
      .catch((err) => setState({ ...defaultState, error: err.data.message }))
      .finally(() => setUpdate(false));
  }

  return (
    <VirtualizedList
      style={[style, { paddingHorizontal: 24 }]}
      data={state.items}
      onEndReached={getItems}
      onEndReachedThreshold={0.15}
      refreshing={shouldUpdate}
      {...props}
    />
  );
}
