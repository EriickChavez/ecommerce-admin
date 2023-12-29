import {DocumentUpload} from 'iconsax-react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageView from '../ImageView/ImageView';

interface UploadImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  fontSize?: number;
  borderWidth?: number;
  title?: string;
  src?: string;
  onChangeImage?: (data: string) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  containerStyle,
  iconSize = 50,
  fontSize = 14,
  borderWidth = 2,
  title,
  onChangeImage,
  src,
}) => {
  const [source, setSource] = useState<string | undefined>(src || '');

  useEffect(() => {
    if (!src) {
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
      <Text>{title}</Text>
      {!hasSource ? (
        <TouchableOpacity
          onPress={handleUpload}
          style={[
            styles.containerUpload,
            {borderWidth: RFValue(borderWidth)},
            containerStyle,
          ]}>
          <>
            <DocumentUpload
              size={RFValue(iconSize)}
              color="#FF8A65"
              variant="Bold"
            />
            <Text style={[{fontSize: RFValue(fontSize)}]}>Upload Image</Text>
          </>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleUpload}
          style={[styles.button, containerStyle]}>
          <ImageView
            imageProps={{
              source: {uri: source},
              // @ts-ignore
              style: [styles.button, containerStyle],
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UploadImage;
