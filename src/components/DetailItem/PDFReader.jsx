import { WebView } from 'react-native-webview';
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Axios from '@/func/Axios';

export default function PDFReader() {
  const state = useSelector((state) => state);
  const reader = 'https://docs.google.com/gview?embedded=true&url=';
  const url = Axios.getUri({
    url: '/files/media/' + state.item.media,
    params: {
      token: state.user.token,
      timestamp: Date.now()
    }
  });

  const uri = reader + url;

  return (
    <>
      <Text style={styles.text}>
        { state.item.title.slice(0, 20) }
      </Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => Linking.openURL(url)}
      >
        <Icon name="link" color="white" size={20} />
      </TouchableOpacity>
      <WebView source={{ uri }} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: -46,
    left: 78,
    zIndex: 100,
    color: 'white',
    fontWeight: '600',
    fontSize: 20
  },
  buttons: {
    position: 'absolute',
    marginRight: 32,
    top: -42,
    right: 0,
    zIndex: 100,
    color: 'white',
    fontWeight: 'bold'
  }
});
