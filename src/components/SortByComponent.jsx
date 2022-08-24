import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown';

const sort = ["Terbaru", "Terlama", "Trending", "Teratas"]

export default function ({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Urutkan:</Text>
      <Icon name="align-left" size={25} />
      <SelectDropdown
        data={sort}
        onSelect={(selectedItem, index) => console.log(selectedItem, index)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        style={{ width: 50, }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownText}
        defaultValue={"Terbaru"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: '700',
    color: 'grey',
  },
  dropdownButton: {
    backgroundColor: 'white',
    width: 90,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
