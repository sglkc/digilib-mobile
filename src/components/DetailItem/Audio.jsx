import { useEffect, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ripple = {
  color: 'silver',
  borderless: true,
};

export default function ({ uri }) {
  const [playIcon, setPlayIcon] = useState('play');
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [volume, setVolume] = useState('volume-high');
  const [rate, setRate] = useState(1.0);
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    )
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    if (!audio) (async () => {
      const loadedAudio = await Audio.Sound.createAsync(
        { uri },
        { progressUpdateIntervalMillis: 1000 }
      );

      loadedAudio.sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) {
          setPlayIcon('loading');
          console.log('not laoded');
          if (status.error) console.error('Erorr playback: ' + status.error);
        } else {
          const { durationMillis, positionMillis } = status;

          setDuration(new Date(durationMillis).toISOString().substr(14, 5));
          setPosition(new Date(positionMillis).toISOString().substr(14, 5));
          setProgress(positionMillis / durationMillis * 100);

          if (status.isPlaying) console.log('playing');
          else console.log('pausing');

          if (status.isBuffering) console.log('bufering');
        }
      });

      setAudio(loadedAudio);
    })();

    return async () => {
      if (audio) {
        await audio.sound.pauseAsync();
        await audio.sound.stopAsync();
        await audio.sound.unloadAsync();
      }
    };
  }, [audio]);

  const toggleAudio = async () => {
    if (playIcon === 'play') {
      await audio.sound.playAsync();
      setPlayIcon('pause');
    } else {
      await audio.sound.pauseAsync();
      setPlayIcon('play');
    }
  };

  const toggleVolume = async () => {
    switch (volume) {
      case 'volume-high':
        await audio.sound.setVolumeAsync(0.7);
        setVolume('volume-medium');
        break;
      case 'volume-medium':
        await audio.sound.setVolumeAsync(0.4);
        setVolume('volume-low');
        break;
      case 'volume-low':
        await audio.sound.setVolumeAsync(0.0);
        setVolume('volume-mute');
        break;
      default:
        await audio.sound.setVolumeAsync(1.0);
        setVolume('volume-high');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={styles.headerContainer}
          onPress={toggleVolume}
          android_ripple={ripple}
        >
          <Icon name={volume} size={25} color="black" />
        </Pressable>
        <Pressable onPress={toggleAudio} android_ripple={ripple}>
          <Animated.View
            style={playIcon === 'loading' && { transform: [{ rotate: spin }] }}
          >
            <Icon name={playIcon} size={42} color="black" />
          </Animated.View>
        </Pressable>
        <Pressable style={styles.headerContainer}>
          <Text style={[styles.header, { color: 'grey' }]}>{ rate }x</Text>
        </Pressable>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.progress, { width: progress + '%' }]} />
      </View>
      <View style={styles.row}>
        <Text style={styles.footer}>{ position }</Text>
        <Text style={styles.footer}>{ duration }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  row: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    padding: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
  },
  progressContainer: {
    marginVertical: 8,
    height: 6,
    backgroundColor: '#333',
  },
  progress: {
    height: 6,
    backgroundColor: 'orange',
//    width: '25%',
  },
  footer: {
    fontWeight: '600',
    color: '#444',
  },
});
