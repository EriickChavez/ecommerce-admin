import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {resetError} from '../../../Utils/restartState';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();

  const logoOpacity = useSharedValue(0);

  useEffect(() => {
    resetError(dispatch);
    logoOpacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../Assets/imgs/avatar.jpeg')}
        style={[styles.logo, logoStyle]}
      />
    </View>
  );
};
export default SplashScreen;
