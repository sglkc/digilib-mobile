import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ({ button, collapsed, component, style, title }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={[styles.title, !collapsed && { paddingBottom: 8 }]}>
          <View style={[{ flexGrow: 1 }, collapsed && styles.titleLeft]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('assets/arrow-left.png')}
                style={[styles.titleImage, !collapsed && { marginBottom: 16 }]}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>{ title }</Text>
          </View>
          <View style={!collapsed && { alignSelf: 'flex-start' }}>
          { button }
          </View>
        </View>
        <ScrollView style={styles.container}>
          <View style={[styles.containerView, style]}>
            { component }
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: StatusBar.currentHeight + 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleLeft: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  titleImage: {
    marginRight: 16,
    height: 16,
    width: 38,
    tintColor: 'white',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  containerView: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    height: '100%',
  },
});
