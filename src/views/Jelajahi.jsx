import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@/components/Button';
import Chip from '@/components/Item/Chip';
import TextInput from '@/components/TextInput';

export default function () {
  const initialCategories = [
    { name: 'Tafsir Al-Quran', selected: false },
    { name: 'Psikologi', selected: false },
    { name: 'Agama', selected: true },
    { name: 'Doa', selected: false },
    { name: 'Hadits', selected: false },
    { name: 'Komunikasi', selected: false },
    { name: 'Neurosains', selected: false },
    { name: 'Sains dan Pendidikan', selected: true },
    { name: 'Fikih', selected: false },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const toggleCategory = (index) => {
    const temp = [...categories];
    temp[index].selected = !temp[index].selected;
    setCategories(temp);
  };

  const chips = categories.map((category, index) => (
    <Chip
      key={index}
      text={category.name}
      style={[
        styles.chip.button, category.selected && styles.chip.selected
      ]}
      styleText={[
        styles.chip.text, category.selected && styles.chip.selectedText
      ]}
      onPress={() => toggleCategory(index)}
    />
  ));

  return (
    <View>
      <Text style={styles.text}>Pilih kategori yang ingin Anda tampilkan.</Text>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.box}
          placeholder="Cari Kategori disini"
        />
        <Pressable
          style={styles.input.button}
          android_ripple={{ color: '#fff', borderless: true, radius: 24 }}
        >
          <Icon name="search" size={30} color="#333" />
        </Pressable>
      </View>
      <View style={styles.chip.container}>
        { chips }
      </View>
      <Button
        style={styles.button.container}
        styleButton={styles.button.box}
        styleText={styles.button.text}
      >
        Cari Kategori
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  chip: {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    button: {
      marginVertical: 4,
      marginHorizontal: 8,
      padding: 8,
      borderRadius: 64,
    },
    selected: {
      backgroundColor: 'orange',
    },
    selectedText: {
      fontWeight: '700',
      color: 'white',
    },
    text: {
      fontSize: 18,
    },
  },
  input: {
    container: {
      marginVertical: 16,
      flexDirection: 'row',
    },
    box: {
      paddingVertical: 12,
    },
    button: {
      padding: 10,
      position: 'absolute',
      right: 0,
    },
  },
  button: {
    container: {
      marginTop: 32,
    },
    box: {
      paddingVertical: 12,
      backgroundColor: 'green',
    },
    text: {
      color: 'white',
    },
  },
});
