import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';

export default function ArticleDetail() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonContainer}
        styleButton={styles.button}
        text="Baca Artikel"
        onPress={() => navigation.navigate('Article Reader')}
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
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'orange',
  },
});
