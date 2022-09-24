import { Dimensions, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';

export default function () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonContainer}
        styleButton={styles.button}
        text="Baca"
        onPress={() => navigation.navigate('PDFReader')}
      />
      <View style={{ marginHorizontal: 4 }} />
      <Button
        style={styles.buttonContainer}
        styleButton={[styles.button, styles.buttonAlt]}
        styleText={styles.buttonAltText}
        text="Beli Buku"
      />
    </View>
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
});
