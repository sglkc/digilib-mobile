import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chip from '@/components/Item/Chip';
import Axios from '@/func/Axios';

export default function ({
  author, bookmark, category, cover, title, onBookmark
}) {
  const navigation = useNavigation();
  const coverUrl = Axios.getUri({ url: '/files/cover/' });
  const token = useSelector((state) => state.user.token);
  const [bookmarked, setBookmark] = useState(bookmark);
  const toggleBookmark = () => {
    setBookmark(!bookmarked || bookmark);
    onBookmark && onBookmark();
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: 'lightgrey', borderless: true }}
      >
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{ uri: coverUrl + cover + '?token=' + token }}
          />
          <View style={styles.detail}>
            <View style={styles.detailText}>
              <View style={{ flexGrow: 1, flexShrink: 1 }}>
                <Text style={styles.title}>{ title }</Text>
                <Text style={styles.author}>{ author }</Text>
              </View>
              <Pressable
                style={styles.icon}
                android_ripple={{ color: 'lightgrey' }}
                onPress={toggleBookmark}
              >
                <Icon
                  name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                  size={30}
                  color="orange"
                />
              </Pressable>
            </View>
            <ScrollView style={styles.category} horizontal={true}>
              { category.map((name, index) => <Chip key={index} text={name} />) }
              <Chip
                style={styles.chipDetail}
                text="Lihat Detail"
                onPress={() => navigation.navigate('DetailItem')}
              />
            </ScrollView>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    borderRadius: 16,
    overflow: 'hidden',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  image: {
    marginRight: 16,
    width: 80,
    height: 135,
    resizeMode: 'cover',
  },
  detail: {
    flex: 1,
    flexGrow: 1,
  },
  detailText: {
    flexDirection: 'row',
    flexGrow: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  icon: {
    top: -4,
    padding: 4,
    alignSelf: 'flex-start',
  },
  category: {
    flexDirection: 'row',
  },
  chipDetail: {
    backgroundColor: 'orange',
  },
});
