import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../../Infrastructure/Store/Actions/CategoryAction';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import styles from './styles';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();
  const stateUser = useSelector(userSelector);
  // @ts-ignore
  dispatch(fetchCategories({token: stateUser.user.token}));

  const logoOpacity = useSharedValue(0);

  useEffect(() => {
    logoOpacity.value = withTiming(1, {
      duration: 1000,
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
