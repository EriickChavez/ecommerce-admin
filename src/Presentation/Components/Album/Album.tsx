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
import ImageView from '../ImageView/ImageView';
import themes from '../../../Themes/themes';

interface AlbumProps {
  theme?: ThemeEntry;
  album?: string[];
  title?: string;
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
  optionsAction = {
    action: undefined,
    textAction: undefined,
    textStyle: undefined,
  },
  title,
  theme = themes.light,
}) => {
  const albumUploaded = useMemo(() => {
    const newArray = [
      ...album,
      ...new Array(Math.max(0, 6 - album.length)).fill(null),
    ];
    return newArray.slice(0, 6); // Garantiza que el arreglo resultante tenga exactamente 6 elementos
  }, [album]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          {title && (
            <Text style={[styles.title, {color: theme.colors.text}]}>
              {title}
            </Text>
          )}
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
          {albumUploaded.map((uri, index) => {
            return (
              <View style={styles.imageContent} key={`album-photo-${index}`}>
                {uri ? (
                  <ImageView
                    imageProps={{style: styles.imageAlbum, source: {uri}}}
                    containerProps={{
                      style: [
                        styles.imageAlbum,
                        {width: imageAlbumSize, height: imageAlbumSize},
                      ],
                    }}
                  />
                ) : (
                  <View
                    style={[
                      styles.imageAlbum,
                      {width: imageAlbumSize, height: imageAlbumSize},
                    ]}
                  />
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Album;
