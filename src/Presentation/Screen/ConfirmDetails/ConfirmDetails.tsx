import React, {useMemo} from 'react';
import {Button, FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {ConfirmDetailsNavigationProps} from '../../../@Types/navigation.newProduct';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import Text from '../../Components/Text/Text';
import {Characteristics} from '../../../Domain/Entity';
import Characteristic from '../../Components/Characteristic/Characteristic';
// import {SCREEN_NAME} from '../../../Enum/Screens';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchNewProducts,
  fetchPictureAlbum,
} from '../../../Infrastructure/Store/Actions/ProductAction';
import {productSelector} from '../../../Infrastructure/Store/Slice/ProductSlice';
import ExpandableText from '../../Components/ExpandibleText/ExpandibleText';
import Chips from '../../Components/Chips/Chips';
const ConfirmDetails: React.FC<ConfirmDetailsNavigationProps> = (
  {
    // navigation,
  },
) => {
  const productStore = useSelector(productSelector);
  const product = useMemo(
    () => productStore.tmpProduct,
    [productStore.tmpProduct],
  );
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      // @ts-ignore
      fetchNewProducts({newProduct: productStore.tmpProduct, type: 'cover'}),
    );
    dispatch(
      // @ts-ignore
      fetchPictureAlbum({
        album: productStore.tmpProduct.album,
        title: productStore.tmpProduct.title,
      }),
    );
    // navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN);
  };

  const isLoadingUpload = useMemo(
    () => productStore.uploadProduct.loading,
    [productStore.uploadProduct.loading],
  );
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

  const renderCategory = () => {
    return (
      <View style={styles.chipsContainer}>
        <Chips text="Hola mundo" leftIcon="Add" options={{fontSize: 12}} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView bounces={false} style={[styles.scrollView, styles.flex]}>
        <View>
          <Text>Product Cover</Text>
          {productStore?.tmpProduct?.cover && (
            <ImagePager
              imageStyles={styles.banner}
              images={[productStore?.tmpProduct?.cover]}
            />
          )}
        </View>
        <Text>{product.title}</Text>
        <Text>$ {product.price}</Text>
        <ExpandableText text={product.subtitle} />
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={renderCategory}
          keyExtractor={() => (Math.random() * 100).toString()}
        />

        {characteristics.map((value, index) => {
          return renderItem({index, item: value});
        })}
      </ScrollView>
      <Button title="Next" onPress={onPress} disabled={isLoadingUpload} />
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
