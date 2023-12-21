import React, {useMemo} from 'react';
import {Button, FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {ConfirmDetailsNavigationProps} from '../../../@Types/navigation.newProduct';
import styles from './styles';
import Text from '../../Components/Text/Text';
import {Characteristics, Product} from '../../../Domain/Entity';
import Characteristic from '../../Components/Characteristic/Characteristic';
import {SCREEN_NAME} from '../../../Enum/Screens';
import {ITEMS} from '../../../Enum';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchNewProducts,
  fetchPictureAlbum,
} from '../../../Infrastructure/Store/Actions/ProductAction';
import {productSelector} from '../../../Infrastructure/Store/Slice/ProductSlice';
import ExpandableText from '../../Components/ExpandibleText/ExpandibleText';
import Chips from '../../Components/Chips/Chips';
import ImageView from '../../Components/ImageView/ImageView';
import Album from '../../Components/Album/Album';
const ConfirmDetails: React.FC<ConfirmDetailsNavigationProps> = ({
  navigation,
}) => {
  const productStore = useSelector(productSelector);
  const product: Product = useMemo(
    () => productStore.tmpProduct,
    // () => ({
    //   album: [
    //     'https://m.media-amazon.com/images/I/61XDCdhExsL.__AC_SY300_SX300_QL70_ML2_.jpg',
    //     'https://m.media-amazon.com/images/I/61XDCdhExsL.__AC_SY300_SX300_QL70_ML2_.jpg',
    //     'https://m.media-amazon.com/images/I/61XDCdhExsL.__AC_SY300_SX300_QL70_ML2_.jpg',
    //     'https://m.media-amazon.com/images/I/61XDCdhExsL.__AC_SY300_SX300_QL70_ML2_.jpg',
    //   ],
    //   categoryId: ['Tecnologia', 'Cocina', 'Camara', 'Electronica'],
    //   characteristics: [
    //     {
    //       icon: 'DocumentText1',
    //       title: 'remould',
    //       description: 'icing',
    //     },
    //     {
    //       icon: 'SliderHorizontal',
    //       title: 'spy',
    //       description: 'era',
    //     },
    //     {
    //       icon: 'Solana',
    //       title: 'jest',
    //       description: 'duel',
    //     },
    //   ],
    //   id: '1234',
    //   imageUri: productStore.tmpProduct.cover,
    //   price: 1200,
    //   subtitle: 'Soy una camara bien bonita',
    //   sellerId: '1234',
    //   stock: 12,
    //   title: 'Camara sony abc',
    //   userId: '1234',
    //   cover:
    //     'https://m.media-amazon.com/images/I/61XDCdhExsL.__AC_SY300_SX300_QL70_ML2_.jpg',
    // }),
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
    navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN, {
      item: ITEMS.PRODUCT,
    });
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

  const renderCategory = ({item, index}: {item: string; index: number}) => {
    return (
      <View style={styles.chipsContainer} key={index}>
        <Chips text={item} options={{fontSize: 12}} />
      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.flex, styles.banner]}>
      <ScrollView bounces={false} style={[styles.scrollView, styles.flex]}>
        <View>
          <Text style={styles.text}>Product Cover</Text>
          {productStore?.tmpProduct?.cover && (
            <>
              <ImageView
                imageProps={{
                  source: {uri: productStore?.tmpProduct?.cover},
                  style: [styles.button],
                }}
              />
            </>
          )}
        </View>
        <Text style={[styles.text, styles.title]}>{product.title}</Text>
        <Text style={styles.text}>$ {product.price}</Text>
        <ExpandableText
          text={product.subtitle}
          containerStyle={styles.containerDescription}
          textStyle={styles.text}
        />
        <View style={styles.categoryContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={product.categoryId}
            renderItem={renderCategory}
            keyExtractor={() => (Math.random() * 100).toString()}
          />
        </View>
        <Text style={styles.text}>Available {product.stock}</Text>

        {product.characteristics.map((value, index) => {
          return renderItem({index, item: value});
        })}

        <Album album={product.album} />
      </ScrollView>
      <Button title="Next" onPress={onPress} disabled={isLoadingUpload} />
    </SafeAreaView>
  );
};

export default ConfirmDetails;
