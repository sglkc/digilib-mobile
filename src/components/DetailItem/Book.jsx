import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Button from '@/components/Button';

export default function ({ uri }) {
  const [download, setDownload] = useState(false);

  return (
    <>
      { download && <WebView source={{ uri }} containerStyle={styles.webview} /> }
      <View style={styles.container}>
        <Button
          style={styles.buttonContainer}
          styleButton={styles.button}
          text="Baca"
          onPress={() => setDownload(true)}
        />
        <View style={{ marginHorizontal: 4 }} />
        <Button
          style={styles.buttonContainer}
          styleButton={[styles.button, styles.buttonAlt]}
          styleText={styles.buttonAltText}
          text="Beli Buku"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexShrink: 1,
  },
  button: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'orange',
  },
  buttonAlt: {
    backgroundColor: 'white',
  },
  buttonAltText: {
    color: 'orange',
  },
  webview: {
    height: 0,
  },
});
