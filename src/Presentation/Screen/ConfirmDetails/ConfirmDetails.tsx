import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import {ConfirmDetailsNavigationProps} from '../../../@Types/navigation.newProduct';
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
            images={['https://picsum.photos/200/300']}
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
