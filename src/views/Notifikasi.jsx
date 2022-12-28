import { useEffect, useState } from 'react';
import {
  StyleSheet, Text, TouchableWithoutFeedback, View, VirtualizedList
} from 'react-native';
import TextButton from '@/components/TextButton';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function NotifikasiView() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Axios.get('/user/notifications')
      .then((res) => {
        const result = res.data.result.map((r) => ({
          name: r.name,
          text: r.text,
          date: new Date(r.createdAt).toString().replace('GMT+0700 ', '')
        }));

        setNotifications(result);
      })
      .catch(() => false);
  }, []);

  function deleteAll() {
    Axios.delete('/user/notifications')
      .then(() => setNotifications([]))
      .catch(() => false);
  }

  const Component = (
    <>
      <TextButton styleText={styles.clear} onPress={deleteAll}>
        Hapus Semua
      </TextButton>
      <VirtualizedList
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
        data={notifications}
        ItemSeparatorComponent={() => (
          <TouchableWithoutFeedback>
            <View style={styles.divider} />
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={(
          <Text style={styles.listTitle}>Notifikasi kosong</Text>
        )}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
            <View style={styles.listItem}>
              <Text style={styles.listDate}>{ item.date }</Text>
              <Text style={styles.listTitle}>{ item.text }</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </>
  );

  return <ViewContainer component={Component} />
}

const styles = StyleSheet.create({
  clear: {
    marginBottom: 16,
    alignSelf: 'flex-end',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listItem: {
    marginVertical: 8,
  },
  listDate: {
    color: '#333',
    fontWeight: 'bold',
  },
  listTitle: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
