import { useEffect, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const ripple = {
  color: 'silver',
  borderless: true,
};

const secondsToTimestamp = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
};

export default function ({ uri }) {
  const [playIcon, setPlayIcon] = useState('play');
  const [audio, setAudio] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState('volume-high');
  const [rate, setRate] = useState(1);
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
          if (status.error) console.error('Error playback: ' + status.error);
        } else {
          const { durationMillis, positionMillis } = status;

          setDuration(Math.round(durationMillis / 1000));
          setPosition(Math.round(positionMillis / 1000));
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
    if (playIcon !== 'pause') {
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

  const toggleRate = async () => {
    switch(rate) {
      case 1:
        setRate(1.25);
        await audio.sound.setRateAsync(1.25, true);
        break;
      case 1.25:
        setRate(1.5);
        await audio.sound.setRateAsync(1.5, true);
        break;
      case 1.5:
        setRate(0.75);
        await audio.sound.setRateAsync(0.75, true);
        break;
      default:
        setRate(1);
        await audio.sound.setRateAsync(1, true);
    }
  };

  const onSlidingComplete = async (seconds) => {
    await audio.sound.playFromPositionAsync(seconds * 1000);
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
        <Pressable onPress={toggleRate} style={styles.headerContainer}>
          <Text style={styles.header}>{ rate }x</Text>
        </Pressable>
      </View>
      <Slider
        minimumTrackTintColor="orange"
        minimumValue={0}
        maximumValue={duration}
        step={1}
        style={styles.slider}
        thumbTintColor="orange"
        value={position}
        onSlidingComplete={onSlidingComplete}
      />
      <View style={styles.row}>
        <Text style={styles.footer}>{ secondsToTimestamp(position) }</Text>
        <Text style={styles.footer}>{ secondsToTimestamp(duration) }</Text>
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
  slider: {
    marginVertical: 8,
  },
  footer: {
    fontWeight: '600',
    color: '#444',
  },
});
