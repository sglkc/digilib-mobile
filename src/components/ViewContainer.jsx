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

export default function ({ component, title, style }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('assets/arrow-left.png')}
              style={styles.titleImage}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>{ title }</Text>
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
    paddingHorizontal: 32,
  },
  titleImage: {
    marginTop: 8,
    marginBottom: 16,
    height: 16,
    width: 38,
    tintColor: 'white',
  },
  titleText: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  containerView: {
    padding: 32,
    height: '100%',
  },
});
