import { useCallback, useEffect, useState } from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import { useSelector } from 'react-redux';
import Item from '@/components/Item';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

export default function ItemScroller({ bookmarkOnly, noBottom, style, url }) {
  const defaultState = {
    count: 0,
    items: [],
    page: 1,
    error: false
  };
  const itemFilter = useSelector(state => state.itemFilter);
  const [state, setState] = useState(defaultState);
  const [shouldUpdate, setUpdate] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const onBookmark = useCallback(() => setUpdate(!!bookmarkOnly), []);
  const props = {
    getItem: useCallback((data, index) => data[index], []),
    getItemCount: useCallback((data) => data.length, []),
    getItemLayout: useCallback((_, index) => ({
      length: 100,
      offset: 100 * index,
      index
    }), []),
    keyExtractor: useCallback((_, index) => index, []),
    ListEmptyComponent: (
      <Text
        style={{
          marginTop: state.error ? 32 : 72,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold'
        }}
      >
        { state.error.status === 400 ?
          <Text>Halaman ini kosong</Text>
          : state.error ?
            <Text>Terjadi error, mohon coba lagi nanti</Text>
            :
            <>
              <Text>{'\n'}Memuat...{'\n\n'}</Text>
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
        <View style={{ marginBottom: noBottom ? 16 : 72 }} />
      </>
    ),
    onEndReached: () => getItems(true),
    onRefresh: () => setRefresh(true),
    renderItem: useCallback(({ item }) => (
      <Item item={item} onBookmark={onBookmark} />
    ), []),
  };

  useEffect(getItems, [shouldUpdate]);

  useEffect(() => {
    setState({ ...defaultState });
    setUpdate(true);
  }, [itemFilter, refresh, url]);

  function getItems(force = false) {
    if (!shouldUpdate && !force) return;
    if (state.items.length >= state.count && state.count !== 0) {
      return setUpdate(false);
    }

    Axios.get(url, {
      params: {
        limit: 10,
        order: itemFilter.order === 'Terbaru' ? 'DESC' : undefined,
        page: state.page,
        type: itemFilter.type
      }
    })
      .then((res) => {
        const lazy = state.items[0]?.item_id === res.data.result[0].item_id;
        const items = lazy
          ? res.data.result
          : state.items.concat(res.data.result);
        const page = refresh ? 1 : state.page + 1;

        setState({ ...defaultState, count: res.data.count, items, page });
      })
      .catch((err) => setState({ ...defaultState, error: err }))
      .finally(() => {
        setUpdate(false);
        setRefresh(false);
      });
  }

  return (
    <VirtualizedList
      style={[style, { paddingHorizontal: 24 }]}
      data={state.items}
      onEndReachedThreshold={0.15}
      refreshing={refresh || shouldUpdate}
      {...props}
    />
  );
}
