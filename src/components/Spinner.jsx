import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default function Spinner({ color, icon, size, style }) {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View style={{
      ...style,
      alignItems: 'center',
      transform: [{ rotate: spin }]
    }}
    >
      <Icon name={icon || 'hourglass'} size={size || 24} color={color || 'white'} />
    </Animated.View>
  )
}
