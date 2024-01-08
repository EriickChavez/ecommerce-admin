import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ImageView from '../ImageView/ImageView';
import {IMAGE_TYPE} from '../../../Enum/Image';
import Text from '../Text/Text';
import styles from './styles';
import {Product} from '../../../Domain/Entity';
import {defaultProduct} from '../../../Constants/defaultValues';
import {Config} from '../../../Config/ENV';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';
interface CardBasicItemProps {
  product: Product;
  onPress: () => void;
  theme?: ThemeEntry;
}

const CardBasicItem: React.FC<CardBasicItemProps> = ({
  product = defaultProduct,
  onPress = () => {},
  theme = themes.light,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: theme.colors.card}]}
      onPress={onPress}>
      <View>
        <View style={[styles.imageContainer]}>
          <ImageView
            imageType={IMAGE_TYPE.PRODUCT}
            imageProps={{
              resizeMode: 'stretch',
              style: styles.image,
              source: {
                uri: Config.BASE_URI_IMAGE + product.cover,
              },
            }}
          />
        </View>
        {/* <View style={styles.tag}>
          <Text>200 sold</Text>
        </View> */}
        <View style={styles.infoContainer}>
          <View>
            <Text
              style={[
                styles.text,
                styles.titleText,
                {color: theme.colors.text},
              ]}>
              {product.title}
            </Text>
            <Text
              style={[
                styles.text,
                styles.titleStock,
                {color: theme.colors.text_secondary},
              ]}>
              {product.subtitle}
            </Text>
            <Text
              style={[
                styles.text,
                styles.titlePrice,
                {color: theme.colors.text},
              ]}>
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardBasicItem;
