import { useEffect, useRef, useState } from 'react';
import {
  BackHandler, Dimensions, Pressable, ScrollView, StyleSheet
} from 'react-native';
import { ResizeMode } from 'expo-av';
import { setStatusBarHidden } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player';

export default function ({ thumbnail, uri, onClose }) {
  const [fullscreen, setFullscreen] = useState(false);
  const refVideo = useRef(null);
  const refScrollView = useRef(null);
  const onContentSizeChange = () => {
    if (!fullscreen) return;
    refScrollView.current.scrollToEnd({ animated: true });
  };

  const onBackgroundClick = async (close = true) => {
    setStatusBarHidden(false, 'none');
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    if (close) onClose();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      async () => {
        await onBackgroundClick(false);
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Pressable
      style={styles.container}
      onPress={!fullscreen ? onBackgroundClick : () => null}
    >
      <ScrollView
        scrollEnabled={!fullscreen}
        ref={refScrollView}
        onContentSizeChange={onContentSizeChange}
        style={fullscreen && {
          backgroundColor: 'black',
          position: 'absolute',
          height: '155%',
          width: '100%',
          top: -110,
        }}
      >
        <VideoPlayer
          defaultControlsVisible={true}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.COVER,
            posterSource: { uri: thumbnail },
            source: { uri },
          }}
          fullscreen={{
            inFullscreen: fullscreen,
            enterFullscreen: async () => {
              setStatusBarHidden(true, 'none');
              await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
              setFullscreen(true);
            },
            exitFullscreen: async () => {
              setStatusBarHidden(false, 'none');
              await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
              setFullscreen(false);
            },
          }}
          style={{
            videoBackgroundColor: 'silver',
            height: fullscreen ? Dimensions.get('window').width : 256,
            width: fullscreen ? Dimensions.get('window').height : Dimensions.get('window').width,
          }}
        />
      </ScrollView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#3333335f',
    zIndex: 500,
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
});
