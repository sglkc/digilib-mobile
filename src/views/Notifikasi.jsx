import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TextButton from '@/components/TextButton';

export default function () {
  const [notifications, setNotifications] = useState([
    { date: '05 August 21', title: 'Update Aplikasi telah tersedia' },
    { date: '05 August 21', title: 'Update Aplikasi telah tersedia' },
    { date: '05 August 21', title: 'Update Aplikasi telah tersedia' },
    { date: '05 August 21', title: 'Update Aplikasi telah tersedia' },
  ]);

  return (
    <ScrollView style={styles.container}>
      <TextButton
        styleText={styles.clear}
        onPress={() => setNotifications([])}
      >
        Hapus Semua
      </TextButton>
      { !notifications.length &&
      <View>
        <Text style={styles.listTitle}>Notifikasi kosong</Text>
      </View>
      }
      { notifications.map((notification, index) => {
        return (
          <>
            <View key={index} style={styles.listItem}>
              <Text style={styles.listDate}>{ notification.date }</Text>
              <Text style={styles.listTitle}>{ notification.title }</Text>
            </View>
            { index + 1 < notifications.length &&
            <View style={styles.divider}></View>
            }
          </>
        );
      })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200, // TODO: header component
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    height: '100%',
  },
  clear: {
    marginVertical: 16,
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
    fontSize: 16,
  },
  listTitle: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
