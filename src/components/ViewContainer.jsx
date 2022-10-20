import {
  Keyboard,
  ImageBackground,
  SafeAreaView,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default function ViewContainer({
  backgroundColor, component, noPadding
}) {
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
            backgroundColor,
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
