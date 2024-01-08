import React from 'react';
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
import {Config} from '../../../Config/ENV';
import {FastImageProps} from 'react-native-fast-image';
import themes from '../../../Themes/themes';

interface AlbumProps {
  theme?: ThemeEntry;
  title?: string;
  album?: string[];
  disabled?: boolean;
  onChangeAlbum?: (data: any) => void;
  optionsAction?: {
    action?: (data: any) => void;
    textAction?: string;
    textStyle?: TextStyle;
  };
  resizeMode?: FastImageProps['resizeMode'];
}
const {width} = Dimensions.get('screen');

const contentWidth = width - width * 0.2;
const imageAlbumSize = contentWidth * 0.3;
const UploadAlbum: React.FC<AlbumProps> = ({
  album = [],
  onChangeAlbum,
  title,
  optionsAction = {
    action: undefined,
    textAction: undefined,
    textStyle: undefined,
  },
  disabled = false,
  resizeMode = 'cover',
  theme = themes.light,
}) => {
  const onChangeImage = (image: string, index: number) => {
    const newAlbum = [...album];
    newAlbum[index] = image;
    onChangeAlbum && onChangeAlbum(newAlbum);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={[styles.title, {color: theme.colors.text}]}>
            {title}
          </Text>
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
          {album.map((_, index) => {
            return (
              <View style={styles.imageContent} key={`album-photo-${index}`}>
                <UploadImage
                  theme={theme}
                  iconSize={25}
                  fontSize={8}
                  borderWidth={1}
                  resizeMode={resizeMode}
                  onChangeImage={data => {
                    !disabled && onChangeImage && onChangeImage(data, index);
                  }}
                  src={Config.BASE_URI_IMAGE + album[index]}
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

export default UploadAlbum;
