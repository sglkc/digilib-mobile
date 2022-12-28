import { WebView } from 'react-native-webview';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Axios from '@/func/Axios';

export default function ArticleReader() {
  const state = useSelector((state) => state);
  const url = Axios.getUri({
    url: '/files/media/' + state.item.media,
    params: { token: state.user.token }
  });

  return (
    <>
      <Text style={styles.text}>
        { state.item.title.slice(0, 20) }
      </Text>
      <WebView
        source={{ uri: url }}
        style={{ margin: 16 }}
        textZoom={250}
      />
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
});
