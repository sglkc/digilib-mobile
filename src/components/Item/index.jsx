import { memo, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '@/store/ItemReducer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chip from '@/components/Item/Chip';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

function Item({ item, onBookmark }) {
  const { author, Bookmark, Categories, cover, item_id, title } = item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const [bookmarked, setBookmark] = useState(Bookmark);
  const [loading, setLoading] = useState(false);
  const categories = Categories.map(c => c.name);
  const coverUrl = Axios.getUri({
    url: '/files/cover/' + cover,
    params: { token }
  });

  function toggleBookmark() {
    if (loading) return;

    setLoading(true);
    Axios.request({
      url: '/bookmarks/' + item_id,
      method: bookmarked ? 'delete' : 'post'
    })
      .then((res) => {
        const bookmark = res.data.message === 'ADDED_BOOKMARK';
        setBookmark(bookmark);
      })
      .catch(() => {
        Axios.get('/bookmarks/' + item_id).then((res) => {
          const bookmark = res.data.message === 'ADDED_BOOKMARK';
          setBookmark(bookmark);
        })
          .catch(() => false);
      })
      .finally(() => {
        onBookmark && onBookmark();
        setLoading(false);
      });
  }

  function onPress() {
    dispatch(setItem({ ...item }));
    navigation.navigate('Detail Item');
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: 'lightgrey', borderless: true }}
        onPress={onPress}
      >
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{ uri: coverUrl }}
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
                { loading ?
                  <Spinner style={styles.icon} color="orange" size={25} />
                  :
                  <Icon
                    name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                    color="orange"
                    size={30}
                  />
                }
              </Pressable>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.categories}>
              { categories.map((name, index) => <Chip key={index} text={name} />) }
              </View>
            </ScrollView>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    borderRadius: 16,
    overflow: 'hidden',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#aaa',
    marginRight: 16,
    width: 86,
    height: 138,
    resizeMode: 'cover',
    borderRadius: 8
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
  categories: {
    flexDirection: 'row',
  },
});

export default memo(Item);
