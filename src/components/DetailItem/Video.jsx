import { useEffect, useRef, useState } from 'react';
import { BackHandler, Dimensions, Pressable, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { ResizeMode } from 'expo-av';
import { setStatusBarHidden } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player';
import Axios from '@/func/Axios';

export default function VideoDetail({ onClose }) {
  const state = useSelector((state) => state);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const refVideo = useRef(null);
  const refScrollView = useRef(null);

  function getUri(file) {
    return Axios.getUri({
      url: '/files/' + file,
      params: { token: state.user.token }
    });
  };

  function onContentSizeChange() {
    if (!isFullscreen) return;
    refScrollView.current.scrollToEnd({ animated: true });
  };

  async function setFullscreen(value = true) {
    const orientation = value
      ? ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      : ScreenOrientation.OrientationLock.DEFAULT;

    setStatusBarHidden(value, 'none');
    await ScreenOrientation.lockAsync(orientation);
    setIsFullscreen(value);

    if (!value) onClose();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      async () => {
        await setFullscreen(false);
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Pressable
      style={{
        position: 'absolute',
        backgroundColor: '#3333335f',
        zIndex: 500,
        height: '100%',
        width: '100%',
        justifyContent: 'center'
      }}
      onPress={!isFullscreen && setFullscreen}
    >
      <ScrollView
        scrollEnabled={!isFullscreen}
        ref={refScrollView}
        onContentSizeChange={onContentSizeChange}
        style={isFullscreen && {
          backgroundColor: 'black',
          position: 'absolute',
          height: '155%',
          width: '100%',
          top: -110,
        }}
      >
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.COVER,
            posterSource: { uri: getUri('/cover/' + state.item.cover) },
            source: { uri: getUri('/media/' + state.item.media) },
          }}
          fullscreen={{
            inFullscreen: isFullscreen,
            enterFullscreen: async () => await setFullscreen(),
            exitFullscreen: async () => await setFullscreen(false),
          }}
          style={{
            videoBackgroundColor: 'silver',
            height: isFullscreen ? Dimensions.get('window').width : 256,
            width: isFullscreen
              ? Dimensions.get('window').height
              : Dimensions.get('window').width,
          }}
        />
      </ScrollView>
    </Pressable>
  );
}
