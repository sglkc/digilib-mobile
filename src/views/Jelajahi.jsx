import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@/components/Button';
import Chip from '@/components/Item/Chip';
import Spinner from '@/components/Spinner';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function Jelajahi({ navigation }) {
  const [categories, setCategories] = useState([]);
  const defaultCategories = useRef([]);
  const search = useRef('');
  const toggleCategory = (index) => {
    const temp = [...categories];
    temp[index].selected = !temp[index].selected;
    setCategories(temp);
  };

  useEffect(() => {
    Axios.get('/categories')
      .then((res) => {
        const data = res.data.result.map((category) => ({
          name: category,
          selected: false
        }));

        setCategories(data);
        defaultCategories.current = data;
      })
      .catch(console.error);
  }, []);

  function searchText() {
    const filtered = defaultCategories.current
      .filter(cat => {
        return cat.name.toLowerCase().match(search.current.toLowerCase());
      });

    setCategories(filtered);
  }

  function searchSelected() {
    const selected = categories
      .filter(cat => cat.selected)
      .map(cat => cat.name);

    if (!selected.length) return;

    navigation.navigate('Detail', { search: selected });
  }

  const Component = (
    <>
      <Text style={styles.text}>Pilih kategori yang ingin Anda tampilkan.</Text>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.box}
          placeholder="Cari Kategori disini"
          onChangeText={(val) => (search.current = val)}
        />
        <Pressable
          style={styles.input.button}
          android_ripple={{ color: '#fff', borderless: true }}
          onPress={searchText}
        >
          <Icon name="search" size={30} color="#333" />
        </Pressable>
      </View>
      <ScrollView>
        { categories.length ?
          <View style={styles.chip.container}>
            { categories.map((category, index) => (
              <Chip
                key={index}
                text={category.name}
                style={[
                  styles.chip.button,
                  category.selected && styles.chip.selected
                ]}
                styleText={[
                  styles.chip.text,
                  category.selected && styles.chip.selectedText
                ]}
                onPress={() => toggleCategory(index)}
              />
            ))}
          </View>
          :
          <Spinner style={{ marginTop: 32 }} color="black" size={30} />
        }
      </ScrollView>
      <Button
        style={styles.button.container}
        styleButton={styles.button.box}
        styleText={styles.button.text}
        onPress={searchSelected}
      >
        Cari Kategori
      </Button>
    </>
  );

  return <ViewContainer component={Component} />;
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
      marginHorizontal: 4,
      borderRadius: 64,
    },
    selected: {
      backgroundColor: 'orange',
    },
    selectedText: {
      color: 'white',
    },
    text: {
      padding: 8,
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center'
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
      marginTop: 16,
    },
    box: {
      paddingVertical: 12,
      backgroundColor: '#3dd20e'
    },
    text: {
      color: 'white',
    },
  },
});
