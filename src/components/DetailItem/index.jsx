import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Article from '@/components/DetailItem/Article';
import Audio from '@/components/DetailItem/Audio';
import Book from '@/components/DetailItem/Book';
import Video from '@/components/DetailItem/Video';
import Chip from '@/components/Item/Chip';
import Spinner from '@/components/Spinner';
import Axios from '@/func/Axios';

export default function DetailItem({ item }) {
  const [videoOverlay, setVideoOverlay] = useState(false);
  const [bookmarkLoading, setBookmarkLoading] = useState(false);
  const [bookmarked, setBookmark] = useState(item.Bookmark)
  const token = useSelector((state) => state.user.token);
  const coverUrl = Axios.getUri({
    url: '/files/cover/' + item.cover,
    params: { token }
  });

  const toggleBookmark = () => {
    if (bookmarkLoading) return;

    setBookmarkLoading(true);
    Axios.request({
      url: '/bookmarks/' + item.item_id,
      method: bookmarked ? 'delete' : 'post'
    })
      .then((res) => {
        const bookmark = res.data.message === 'ADDED_BOOKMARK';
        setBookmark(bookmark);
      })
      .catch(() => {
        Axios.get('/bookmarks/' + item.item_id).then((res) => {
          const bookmark = res.data.message === 'ADDED_BOOKMARK';
          setBookmark(bookmark);
        })
          .catch(() => false);
      })
      .finally(() => setBookmarkLoading(false));
  };

  const toggleVideo = () => {
    setVideoOverlay(!videoOverlay);
  };

  const share = () => {
    Share.share({
      message: 'https://digilib.jalanrahmat.id/item/' + item.item_id,
    })
      .catch(() => false);
  };

  return (
    <ImageBackground
      source={require('assets/BG_ORANGE.png')}
    >
      { videoOverlay &&
      <Video thumbnail={item.cover} uri={item.media} onClose={toggleVideo} />
      }
      <View style={styles.thumbnail.container}>
        { item.type === 'video' &&
        <Pressable style={styles.thumbnail.icon} onPress={toggleVideo}>
          <Icon name="play-arrow" color="white" size={65} />
        </Pressable>
        }
        <Image
          style={[styles.thumbnail.default, styles.thumbnail[item.type]]}
          source={{ uri: coverUrl }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ minHeight: '100%' }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container, item.type === 'video' && styles.containerVideo
          ]}
        >
          { item.type !== 'video' && <View style={styles.line} /> }
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.author}>{ item.author }</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.row}
              activeOpacity={0.5}
              onPress={share}
            >
              <Icon name="share" size={28} color="#555" />
              <Text style={styles.shareText}>Bagikan</Text>
            </TouchableOpacity>
            <View style={{ flexGrow: 1 }} />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={toggleBookmark}
            >
              { bookmarkLoading ?
                <Spinner style={{ marginRight: 6 }} color="orange" size={20} />
                :
                <Icon
                  name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                  size={32}
                  color="orange"
                />
              }
            </TouchableOpacity>
          </View>
          { item.type === 'article' && <Article /> }
          { item.type === 'audio' && <Audio /> }
          { item.type === 'book' && <Book /> }
          <Text style={styles.subtitle}>Deskripsi Singkat</Text>
          <Text style={styles.description}>{ item.description }</Text>
          <Text style={styles.subtitle}>Tagar</Text>
          <View style={styles.row}>
            { item.Categories.map((category, index) => (
              <Chip
                key={index}
                text={category.name}
                style={styles.chip}
                styleText={styles.chipText}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      padding: 32,
      position: 'absolute',
      zIndex: 100,
    },
    default: { resizeMode: 'contain' },
    audio: { width: 370, height: 500 },
    book: { width: 300, height: 500 },
    video: { width: '100%', height: 256, resizeMode: 'cover' },
  },
  container: {
    marginTop: 512,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: '100%',
    backgroundColor: 'white',
  },
  containerVideo: {
    marginTop: 256,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
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
    fontSize: 16,
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
});
