import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './styles';

import {ThemeEntry} from '../../../@Types/theme';
import UploadImage from '../UploadImage/UploadImage';

interface AlbumProps {
  theme?: ThemeEntry;
  onViewAll?: () => void;
  album?: string[];
}
const {width} = Dimensions.get('screen');

const contentWidth = width - width * 0.2;
const imageAlbumSize = contentWidth * 0.3;
const Album: React.FC<AlbumProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Products</Text>
          <View style={styles.albumContainer}>
            <View style={styles.actionAlbum}>
              <Text style={styles.actionText}>View All</Text>
            </View>
          </View>
        </View>
        <View style={styles.album}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <View style={styles.imageContent}>
                <UploadImage
                  iconSize={25}
                  fontSize={8}
                  containerStyle={[
                    styles.imageAlbum,
                    {width: imageAlbumSize, height: imageAlbumSize},
                  ]}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Album;
