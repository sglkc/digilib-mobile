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
import { useEffect } from 'react';

export default function ({
  button, collapsed, component, drawer, style, title, transparent, CLOSE_DRAWER_PLEASE
}) {
  const navigation = useNavigation();
  useEffect(() => {
    CLOSE_DRAWER_PLEASE
  }, [])
  
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={[styles.title, !collapsed && { paddingBottom: 8 }]}>
          <View style={[{ flexGrow: 1 }, collapsed && styles.titleLeft]}>
            { drawer ||
            <>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('assets/arrow-left.png')}
                  style={[styles.titleIcon, !collapsed && { marginBottom: 16 }]}
                />
              </TouchableOpacity>
              <Text style={styles.titleText}>{ title }</Text>
            </>
            }
          </View>
          <View style={!collapsed && { alignSelf: 'flex-start' }}>
          { button }
          </View>
        </View>
        <View style={[{ flex: 1 }, !transparent && { backgroundColor: 'white' }]}>
          <View style={[styles.container, style]}>
            { component }
          </View>
        </View>
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
  titleIcon: {
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
    paddingHorizontal: 32,
    paddingVertical: 16,
    flex: 1,
  },
});
