import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Alert({ background, color, icon, text }) {
  return (
    <View
      style={[styles.container, { backgroundColor: background || '#dc3545'}]}
    >
      <Icon
        name={icon || 'exclamation-triangle'}
        size={22}
        color={color || 'white'}
      />
      <Text style={[styles.text, { color: color || 'white' }]}>{ text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row'
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  }
});
