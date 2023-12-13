import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ImageView from '../ImageView/ImageView';
import {IMAGE_TYPE} from '../../../Enum/Image';
import Text from '../Text/Text';
import styles from './styles';
import {getBackgroundColor} from '../../../Utils/imageUtils';

interface CardBasicItemProps {
  source: string;
}

const CardBasicItem: React.FC<CardBasicItemProps> = ({source}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    getBackgroundColor(source, color => {
      setBackgroundColor(color);
    });
  }, [source]);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={[styles.imageContainer, {backgroundColor: backgroundColor}]}>
          <ImageView
            imageType={IMAGE_TYPE.PRODUCT}
            imageProps={{
              resizeMode: 'contain',
              style: styles.image,
              source: {
                uri: source,
              },
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
