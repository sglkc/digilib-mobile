import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ripple = {
  color: 'silver',
  borderless: true,
};

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable style={styles.headerContainer} android_ripple={ripple}>
          <Icon name="volume-up" size={25} color="black" />
        </Pressable>
        <Pressable android_ripple={ripple}>
          <Icon name="play-arrow" size={42} color="black" />
        </Pressable>
        <Pressable style={styles.headerContainer} android_ripple={ripple}>
          <Text style={styles.header}>1x</Text>
        </Pressable>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progress} />
      </View>
      <View style={styles.row}>
        <Text style={styles.footer}>00:00</Text>
        <Text style={styles.footer}>50:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  row: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    padding: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
  },
  progressContainer: {
    marginVertical: 8,
    height: 6,
    backgroundColor: '#333',
  },
  progress: {
    height: 6,
    backgroundColor: 'orange',
    width: '25%',
  },
  footer: {
    fontWeight: '600',
    color: '#444',
  },
});
