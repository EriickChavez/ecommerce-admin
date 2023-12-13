import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import {ConfirmDetailsNavigationProps} from '../../../@Types/navigation';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import Text from '../../Components/Text/Text';
import {Characteristics} from '../../../Domain/Entity';
import Characteristic from '../../Components/Characteristic/Characteristic';
import {SCREEN_NAME} from '../../../Enum/Screens';

const ConfirmDetails: React.FC<ConfirmDetailsNavigationProps> = ({
  navigation,
}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: Characteristics;
    index: number;
  }) => {
    return (
      <View style={[styles.characteristicContainer]} key={index}>
        <View style={[styles.flex]}>
          <Characteristic
            icon={item.icon}
            description={item.description}
            title={item.title}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView bounces={false} style={[styles.scrollView, styles.flex]}>
        <View>
          <Text>Product Cover</Text>
          <ImagePager
            imageStyles={styles.banner}
            images={[
              'https://yt3.googleusercontent.com/Eo-ns4GaYmA_LqdKqmTYWxQjMdETJ2ml2yuwmqfnsBRwx7_-xiozAIW570wm0Maj34WtkiOCYw=s900-c-k-c0x00ffffff-no-rj',
            ]}
          />
        </View>
        {characteristics.map((value, index) => {
          return renderItem({index, item: value});
        })}
      </ScrollView>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN);
        }}
      />
    </SafeAreaView>
  );
};
const characteristics = [
  {
    icon: 'DocumentText1',
    title: 'remould',
    description: 'icing',
  },
  {
    icon: 'SliderHorizontal',
    title: 'spy',
    description: 'era',
  },
  {
    icon: 'Solana',
    title: 'jest',
    description: 'duel',
  },
];

export default ConfirmDetails;
