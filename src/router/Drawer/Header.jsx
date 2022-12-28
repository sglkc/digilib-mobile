import {
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextButton from '@/components/TextButton';

export default function Header({ navigation, route, options }) {
  return (
    <ImageBackground
      source={!options.hideBanner && require('assets/BG_ORANGE_BANNER.png')}
      style={options.hideBanner && { backgroundColor: '#ffa213' }}
    >
      <View style={styles.container}>
        <View style={[
          styles.left.container,
          options.expand && styles.left.expand
        ]}>
          <TouchableOpacity
            style={styles.left.icon}
            onPress={
              options.menuButton
                ? () => navigation.openDrawer()
                : () => navigation.goBack()
            }
          >
            <Icon
              style={options.expand && { marginBottom: 8 }}
              name={options.menuButton ? 'menu' : 'arrow-left'}
              color="white"
              size={32}
            />
          </TouchableOpacity>
          <Text style={styles.left.title}>
            { !options.hideTitle && route.name }
          </Text>
        </View>
        { route.name === 'Informasi Akun' ?
          <TextButton
            style={options.expand && styles.right.button}
            styleText={styles.right.uniqueButton}
            text="Ubah"
            onPress={() => navigation.navigate('Ubah Informasi Akun')}
          />
          : options.searchButton &&
          <TouchableOpacity
            style={options.expand && styles.right.button}
            onPress={() => navigation.navigate('Pencarian')}
          >
            <Icon name="search" size={25} color="white" />
          </TouchableOpacity>
        }
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
    },
    expand: {
      flexDirection: 'column',
      alignItems: 'flex-start'
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
  right: {
    button: {
      marginTop: 3,
      alignSelf: 'flex-start'
    },
    uniqueButton: {
      color: 'white',
      fontWeight: '500'
    },
  },
});
