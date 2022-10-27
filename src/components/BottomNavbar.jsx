import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNavbar({ selected }) {
  const navigation = useNavigation();
  const items = [
    { name: 'Etalase', icon: 'home', route: 'Etalase' },
    { name: 'Jelajahi', icon: 'folder-open', route: 'Jelajahi' },
    { name: 'Tandai', icon: 'bookmark', route: 'Tandai' },
  ];

  return (
    <View style={styles.container}>
      { items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Pressable
            android_ripple={{ color: '#ddd5', borderless: true, radius: 58 }}
            onPress={() => navigation.navigate(item.route)}
          >
            <Icon
              style={styles.icon}
              name={selected === index ? item.icon : item.icon + '-outline'}
              size={25}
              color={selected === index ? '#333' : 'white'}
            />
            <Text style={[styles.text, selected === index && { color: '#333' }]}>
              { item.name }
            </Text>
          </Pressable>
        </View>
      )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#3dd20e',
    width: '75%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 2,
    alignSelf: 'center',
  }
});
