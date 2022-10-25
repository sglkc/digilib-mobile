import { useState } from 'react';
import {
  Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Audio from '@/components/DetailItem/Audio';
import Book from '@/components/DetailItem/Book';
import Video from '@/components/DetailItem/Video';
import Chip from '@/components/Item/Chip';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function DetailItem({ item }) {
  const token = useSelector((state) => state.user.token);
  const [videoOverlay, setVideoOverlay] = useState(false);
  const coverUrl = Axios.getUri({
    url: '/files/cover/' + item.cover,
    params: { token }
  });

  const toggleBookmark = () => {
    const temp = { ...item };
    temp.bookmark = !temp.bookmark;
    /* TODO
{
    if (loading) return;

    onBookmark && onBookmark();
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
      .finally(() => setLoading(false));
  }
  */
  };

  const toggleVideo = () => {
    setVideoOverlay(!videoOverlay);
  };

  const component = (
    <>
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
        overScrollMode="never"
        contentContainerStyle={{ minHeight: '100%' }}
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
          { item.type === 'book' && <Book /> }
          { item.type === 'audio' && <Audio /> }
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

  return <ViewContainer component={component} noPadding transparent />;
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
