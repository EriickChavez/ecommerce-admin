import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import ImageView from '../ImageView/ImageView';
import {ThemeEntry} from '../../../@Types/theme';
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
        <ImageView
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
