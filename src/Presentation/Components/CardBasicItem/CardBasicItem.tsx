import React from 'react';
import {View} from 'react-native';
import ImageView from '../ImageView/ImageView';
import {IMAGE_TYPE} from '../../../Enum/Image';
import Text from '../Text/Text';
import styles from './styles';

interface CardBasicItemProps {}

const CardBasicItem: React.FC<CardBasicItemProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <ImageView
            imageType={IMAGE_TYPE.PRODUCT}
            imageProps={{
              resizeMode: 'contain',
              style: styles.image,
            }}
          />
        </View>
        <View style={styles.tag}>
          <Text>200 sold</Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={[styles.text, styles.titleText]}>
              Air Jordan 1 Retro & ...
            </Text>
            <Text style={[styles.text, styles.titleStock]}>
              12 pcs • M,L,XL
            </Text>
            <Text style={[styles.text, styles.titlePrice]}>$400</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBasicItem;
