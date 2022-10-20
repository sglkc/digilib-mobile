import {
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header({ navigation, route, options, layout }) {
  return (
    <View style={styles.container}>
      <View style={styles.left.container}>
        <TouchableOpacity
          style={styles.left.icon}
          onPress={
            options.hideMenu
              ? () => navigation.goBack()
              : () => navigation.openDrawer()
          }
        >
          <Icon
            name={options.hideMenu ? 'arrow-left' : 'menu'}
            color="white"
            size={32}
          />
        </TouchableOpacity>
        <Text style={styles.left.title}>
          { !options.hideTitle && route.name }
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Pencarian')}>
        <Icon name="search" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
    },
    icon: {
      marginRight: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  },
});
