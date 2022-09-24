import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';

export default function () {
  const item = useSelector((state) => state.item);
  const uri = 'https://docs.google.com/gview?embedded=true&url=' + item.media

  return <WebView source={{ uri }} />;
}
