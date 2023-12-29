import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ImageView from '../ImageView/ImageView';
import {IMAGE_TYPE} from '../../../Enum/Image';
import Text from '../Text/Text';
import styles from './styles';
import {bgColor, getBackgroundColor} from '../../../Utils/imageUtils';
import {Product} from '../../../Domain/Entity';
import {defaultProduct} from '../../../Constants/defaultValues';

interface CardBasicItemProps {
  product: Product;
  onPress: () => void;
}

const CardBasicItem: React.FC<CardBasicItemProps> = ({
  product = defaultProduct,
  onPress = () => {},
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    if (product.imageUri) {
      getBackgroundColor(product.imageUri).catch((data: bgColor) => {
        setBackgroundColor(data.background);
      });
    }
  }, [product?.imageUri]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <View
          style={[styles.imageContainer, {backgroundColor: backgroundColor}]}>
          <ImageView
            imageType={IMAGE_TYPE.PRODUCT}
            imageProps={{
              resizeMode: 'contain',
              style: styles.image,
              source: {
                uri: product?.imageUri
                  ? product.imageUri
                  : 'https://picsum.photos/200/300',
              },
            }}
          />
        </View>
        {/* <View style={styles.tag}>
          <Text>200 sold</Text>
        </View> */}
        <View style={styles.infoContainer}>
          <View>
            <Text style={[styles.text, styles.titleText]}>{product.title}</Text>
            <Text style={[styles.text, styles.titleStock]}>
              {product.subtitle}
            </Text>
            <Text style={[styles.text, styles.titlePrice]}>
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardBasicItem;
