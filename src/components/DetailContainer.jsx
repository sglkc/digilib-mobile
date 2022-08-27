import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Drawer from 'react-native-draggable-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@/components/Button';
import Chip from '@/components/Item/Chip';

export default function ({ item, setItem }) {
  const toggleBookmark = () => {
    const temp = { ...item };
    temp.bookmark = !temp.bookmark;
    setItem(temp);
  };

  return (
    <>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} source={{ uri: item.cover }} />
      </View>
      <ScrollView overScrollMode="never" contentContainerStyle={{ minHeight: '100%' }}>
        <View style={styles.container}>
          <View style={styles.line} />
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.author}>{ item.author }</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.row} activeOpacity={0.5}>
              <Icon name="share" size={25} color="#555" />
              <Text style={styles.shareText}>Bagikan</Text>
            </TouchableOpacity>
            <View style={{ flexGrow: 1 }} />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={toggleBookmark}
            >
              <Icon
                name={item.bookmark ? 'bookmark' : 'bookmark-outline'}
                size={25}
                color="orange"
              />
            </TouchableOpacity>
          </View>
          { item.type === 'book' &&
          <View style={styles.book.container}>
            <Button
              text="Baca"
              style={styles.book.buttonContainer}
              styleButton={styles.book.button}
            />
            <Button text="Beli Buku" />
          </View>
          }
          <Text style={styles.subtitle}>Deskripsi Singkat</Text>
          <Text style={styles.description}>{ item.description }</Text>
          <Text style={styles.subtitle}>Tagar</Text>
          <View style={styles.row}>
            { item.categories.map((category, index) => (
              <Chip
                key={index}
                text={category}
                style={styles.chip}
                styleText={styles.chipText}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    marginHorizontal: 64,
  },
  thumbnail: {
    width: 256,
    height: 256,
  },
  container: {
    marginTop: 350,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: '100%',
    backgroundColor: 'white',
  },
  line: {
    marginBottom: 8,
    alignSelf: 'center',
    borderColor: 'silver',
    borderRadius: 32,
    width: 64,
    borderBottomWidth: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  author: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
  },
  row: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  shareText: {
    marginLeft: 8,
    fontWeight: '700',
    color: '#555',
  },
  subtitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  chip: {
    marginRight: 8,
    marginTop: 8,
    padding: 6,
    borderRadius: 32,
  },
  chipText: {
    fontSize: 16,
  },
  book: {
    container: {
      flexDirection: 'row',
    },
    buttonContainer: {
      width: 'auto',
    },
    button: {

    },
  },
});
