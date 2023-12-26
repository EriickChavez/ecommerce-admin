import React, {forwardRef, useImperativeHandle} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {ShakeViewRef} from '../@Types/ref';

const EASING = Easing.elastic(1.5);
interface ShakeViewProps {
  Angle?: number;
  Time?: number;
  children?: React.ReactNode | React.ReactNode[];
}

const ShakeView = forwardRef<ShakeViewRef, ShakeViewProps>(
  ({Angle = 1, Time = 50, children}, ref) => {
    useImperativeHandle(ref, () => ({
      startShake: () => handlePress(),
    }));

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
  },
);

export default ShakeView;
