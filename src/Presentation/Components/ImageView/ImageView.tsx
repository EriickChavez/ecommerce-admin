import React from 'react';
import {ActivityIndicator, View, ViewProps} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import styles from './styles';
import {IMAGE_TYPE} from '../../../Enum/Image';
import {getDefaultImage} from '../../../Utils/imageUtils';

interface ImageView {
  imageProps?: FastImageProps;
  containerProps?: ViewProps;
  imageType?: IMAGE_TYPE;
}

const ImageView: React.FC<ImageView> = ({
  containerProps,
  imageProps,
  imageType = IMAGE_TYPE.AVATAR,
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const defaultImage = getDefaultImage(imageType);
  return (
    // @ts-ignore
    <View {...containerProps}>
      <FastImage
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        defaultSource={defaultImage}
        {...imageProps}
      />
      {isLoading && (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default ImageView;
