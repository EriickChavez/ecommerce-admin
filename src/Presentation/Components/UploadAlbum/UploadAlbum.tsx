import React, {useMemo} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import styles from './styles';

import {ThemeEntry} from '../../../@Types/theme';
import UploadImage from '../UploadImage/UploadImage';

interface AlbumProps {
  theme?: ThemeEntry;
  album?: string[];
  onChangeAlbum?: (data: any) => void;
  optionsAction?: {
    action?: (data: any) => void;
    textAction?: string;
    textStyle?: TextStyle;
  };
}
const {width} = Dimensions.get('screen');

const contentWidth = width - width * 0.2;
const imageAlbumSize = contentWidth * 0.3;
const Album: React.FC<AlbumProps> = ({
  album = ['', '', '', '', '', ''],
  onChangeAlbum,
  optionsAction = {
    action: undefined,
    textAction: undefined,
    textStyle: undefined,
  },
}) => {
  const albumUploaded = useMemo(() => album, [album]);
  const onChangeImage = (image: string, index: number) => {
    const newAlbum = [...album];
    newAlbum[index] = image;
    onChangeAlbum && onChangeAlbum(newAlbum);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Products</Text>
          <View style={styles.albumContainer}>
            {optionsAction && (
              <TouchableOpacity
                style={styles.actionAlbum}
                onPress={optionsAction.action}>
                <Text style={[styles.actionText, optionsAction.textStyle]}>
                  {optionsAction.textAction}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.album}>
          {albumUploaded.map((_, index) => {
            return (
              <View style={styles.imageContent} key={`album-photo-${index}`}>
                <UploadImage
                  iconSize={25}
                  fontSize={8}
                  onChangeImage={data => {
                    onChangeImage && onChangeImage(data, index);
                  }}
                  src={albumUploaded[index]}
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
