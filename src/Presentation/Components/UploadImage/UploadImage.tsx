import {DocumentUpload} from 'iconsax-react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageView from '../ImageView/ImageView';
import {Config} from '../../../Config/ENV';
import {FastImageProps} from 'react-native-fast-image';
import LocalizationService from '../../../Utils/LocalizationService';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface UploadImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  fontSize?: number;
  borderWidth?: number;
  title?: string;
  src?: string;
  onChangeImage?: (data: string) => void;
  resizeMode?: FastImageProps['resizeMode'];
  theme?: ThemeEntry;
}

const UploadImage: React.FC<UploadImageProps> = ({
  containerStyle,
  iconSize = 50,
  fontSize = 14,
  borderWidth = 2,
  title,
  onChangeImage,
  src,
  resizeMode = 'cover',
  theme = themes.light,
}) => {
  const [source, setSource] = useState<string | undefined>(src || '');

  useEffect(() => {
    if (!src || src === Config.BASE_URI_IMAGE) {
      setSource(undefined);
    }
  }, [src]);

  const handleUpload = async () => {
    launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    })
      .then(data => {
        // @ts-ignore
        onChangeImage && onChangeImage(data.assets[0].uri);
        // @ts-ignore
        return setSource(data.assets[0].uri);
      })
      .catch(err => console.error('ERROR AL SUBIR LA IMAGEN', err));
  };

  const hasSource: boolean = useMemo(() => {
    return !!source;
  }, [source]);

  return (
    <View>
      {title && (
        <Text style={[styles.title, {color: theme.colors.text}]}>{title}</Text>
      )}
      {!hasSource ? (
        <TouchableOpacity
          onPress={handleUpload}
          style={[
            styles.containerUpload,
            {borderColor: theme.colors.border},
            {borderWidth: RFValue(borderWidth)},
            containerStyle,
          ]}>
          <>
            <DocumentUpload
              size={RFValue(iconSize)}
              color="#FF8A65"
              variant="Bold"
            />
            <Text
              style={[{fontSize: RFValue(fontSize), color: theme.colors.text}]}>
              {LocalizationService.input.uploadImage}
            </Text>
          </>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleUpload}
          style={[
            styles.button,
            {borderColor: theme.colors.border},
            containerStyle,
          ]}>
          <ImageView
            imageProps={{
              source: {uri: source},
              // @ts-ignore
              style: [styles.button, containerStyle],
              resizeMode,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UploadImage;
