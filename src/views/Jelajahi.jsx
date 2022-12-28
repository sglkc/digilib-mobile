import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@/components/Button';
import Chip from '@/components/Item/Chip';
import Spinner from '@/components/Spinner';
import TextInput from '@/components/TextInput';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function JelajahiView({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const defaultCategories = useRef([]);
  const search = useRef('');
  const toggleCategory = (index) => {
    let temp = [...selected];

    if (selected.includes(index)) {
      temp = [...temp.filter(i => i !== index)];
    } else {
      temp.push(index);
    }

    setSelected(temp);
  };

  useEffect(() => {
    Axios.get('/categories')
      .then((res) => {
        setCategories(res.data.result);
        defaultCategories.current = res.data.result;
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
    const mapped = selected.map(i => categories[i]);

    if (!mapped.length) return;

    navigation.navigate('Detail', { search: mapped });
  }

  const Component = (
    <>
      <Text style={styles.text}>Pilih kategori yang ingin Anda tampilkan.</Text>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.box}
          placeholder="Cari Kategori disini"
          onChangeText={(val) => (search.current = val)}
          onSubmitEditing={searchText}
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
                text={category}
                style={[
                  styles.chip.button,
                  selected.includes(index) && styles.chip.selected
                ]}
                styleText={[
                  styles.chip.text,
                  selected.includes(index) && styles.chip.selectedText
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
