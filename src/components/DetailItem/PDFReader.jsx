import { WebView } from 'react-native-webview';

export default function () {
  const uri = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf';

  return (
    <WebView
      source={{ uri: 'https://docs.google.com/gview?embedded=true&url=' + uri }}
    />
  );
}
