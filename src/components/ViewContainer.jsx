import {
  Keyboard,
  ImageBackground,
  SafeAreaView,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default function ViewContainer({ component, noPadding, transparent }) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('assets/BG_ORANGE.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{
            paddingHorizontal: noPadding ? 0 : 32,
            paddingVertical: noPadding ? 0 : 32,
            backgroundColor: transparent ? 'transparent' : 'white',
            height: '100%',
          }}
          >
            { component }
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
}
