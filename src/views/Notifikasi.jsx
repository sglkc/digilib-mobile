import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '@/components/TextButton';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function Notifikasi() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Axios.get('/user/notifications')
      .then((res) => {
        const result = res.data.result.map((r) => ({
          name: r.name,
          text: r.text,
          date: new Date(r.createdAt).toString()
        }));

        setNotifications(result);
      })
      .catch(() => false);
  }, []);

  function deleteAll() {
    Axios.delete('/user/notifications')
      .then((res) => setNotifications([]))
      .catch(() => false);
  }

  const Component = (
    <View style={styles.container}>
      <TextButton styleText={styles.clear} onPress={deleteAll}>
        Hapus Semua
      </TextButton>
      { !notifications.length &&
      <View>
        <Text style={styles.listTitle}>Notifikasi kosong</Text>
      </View>
      }
      { notifications.map((notification, index) => {
        return (
          <View key={index}>
            <View style={styles.listItem}>
              <Text style={styles.listDate}>{ notification.date }</Text>
              <Text style={styles.listTitle}>{ notification.text }</Text>
            </View>
            { index + 1 < notifications.length &&
            <View style={styles.divider}></View>
            }
          </View>
        );
      })
      }
    </View>
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
    fontWeight: '700',
  },
  listTitle: {
    marginVertical: 8,
    fontWeight: '700',
    fontSize: 16,
  },
});
