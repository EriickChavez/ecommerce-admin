import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LoadingImage from '../LoadingImage/LoadingImage';
import FastImage from 'react-native-fast-image';
import {ThemeEntry} from '../../@Types/theme';
// import Countdown from '../Countdown/Countdown';

interface BannerProps {
  title: string;
  description: string;
  imageUri: string;
  theme?: ThemeEntry;
}

const Banner: React.FC<BannerProps> = ({imageUri}) => {
  return (
    <View>
      <View style={styles.banner}>
        <LoadingImage
          imageProps={{
            source: {
              uri: imageUri,
              priority: FastImage.priority.low,
            },
            style: styles.image,
            resizeMode: FastImage.resizeMode.cover,
          }}
        />
      </View>
    </View>
  );
};

export default Banner;
