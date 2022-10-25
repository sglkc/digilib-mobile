import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import Axios from '@/func/Axios';

export default function PDFReader() {
  const state = useSelector((state) => state);
  const reader = 'https://docs.google.com/gview?embedded=true&url=';
  const url = Axios.getUri({
    url: '/files/media/' + state.item.media,
    params: {
      token: state.user.token
    }
  });
  const uri = reader + url;

  return <WebView source={{ uri }} />;
}
