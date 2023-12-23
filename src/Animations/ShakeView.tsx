import React from 'react';
import {View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const EASING = Easing.elastic(1.5);
interface ShakeViewProps {
  Angle: number;
  Time: number;
  children?: React.ReactNode | React.ReactNode[];
  callback: () => void;
}
const ShakeView: React.FC<ShakeViewProps> = ({
  Angle = 1,
  Time = 50,
  children,
  callback,
}) => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotateZ: `${rotation.value}deg`}],
  }));

  const handlePress = () => {
    rotation.value = withSequence(
      withTiming(-Angle, {duration: Time / 2, easing: EASING}),
      withRepeat(
        withTiming(Angle, {
          duration: Time,
          easing: EASING,
        }),
        7,
        true,
      ),
      withTiming(0, {duration: Time / 2, easing: EASING}),
    );
  };

  return (
    <View>
      <Animated.View style={[animatedStyle]}>{children}</Animated.View>
    </View>
  );
};

export default ShakeView;
