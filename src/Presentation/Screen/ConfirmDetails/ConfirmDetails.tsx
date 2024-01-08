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
import {fetchNewProducts} from '../../../Infrastructure/Store/Actions/ProductAction';
import {productSelector} from '../../../Infrastructure/Store/Slice/ProductSlice';
import ExpandableText from '../../Components/ExpandibleText/ExpandibleText';
import Chips from '../../Components/Chips/Chips';
import ImageView from '../../Components/ImageView/ImageView';
import Album from '../../Components/Album/Album';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';
const ConfirmDetails: React.FC<ConfirmDetailsNavigationProps> = ({
  navigation,
}) => {
  const userState = useSelector(userSelector);
  const productStore = useSelector(productSelector);
  const product: Product = useMemo(
    () => productStore.tmpProduct,
    [productStore.tmpProduct],
  );
  const dispatch = useDispatch();
  const onPress = () => {
    try {
      dispatch(
        // @ts-ignore
        fetchNewProducts({
          newProduct: productStore.tmpProduct,
          type: 'cover',
          token: userState.user.token,
        }),
      );
      navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN, {
        item: ITEMS.PRODUCT,
      });
    } catch (err) {
      console.info({err});
      // TODO: hacer una alerta de error
    }
  };

  const isLoadingUpload = useMemo(
    () => productStore.uploadProduct.loading,
    [productStore.uploadProduct.loading],
  );
  const renderItem = ({
    cItem,
    index,
  }: {
    cItem: Characteristics;
    index: number;
  }) => {
    return (
      <View style={[styles.characteristicContainer]} key={index}>
        <View style={[styles.flex]}>
          <Characteristic
            icon={cItem.icon}
            description={cItem.description}
            title={cItem.title}
          />
        </View>
      </View>
    );
  };

  const renderCategory = ({
    categoryItem,
    index,
  }: {
    categoryItem: string;
    index: number;
  }) => {
    return (
      <View style={styles.chipsContainer} key={index}>
        <Chips text={categoryItem} options={{fontSize: 12}} />
      </View>
    );
  };
  return (
    <SceneView>
      <SafeAreaView style={[styles.flex, styles.banner]}>
        <ScrollView bounces={false} style={[styles.scrollView, styles.flex]}>
          <View>
            <Text style={styles.text}>
              {LocalizationService.addProduct.productCover}
            </Text>
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
              renderItem={({index, item: CatItem}) =>
                renderCategory({categoryItem: CatItem, index})
              }
              keyExtractor={() => (Math.random() * 100).toString()}
            />
          </View>
          <Text style={styles.text}>
            {LocalizationService.addProduct.availableProducts} {product.stock}
          </Text>

          {product.characteristics.map((value, index) => {
            return renderItem({index, cItem: value});
          })}

          <Album
            album={product.album}
            title={LocalizationService.addProduct.album}
          />
        </ScrollView>
        <Button title="Next" onPress={onPress} disabled={isLoadingUpload} />
      </SafeAreaView>
    </SceneView>
  );
};

export default ConfirmDetails;
