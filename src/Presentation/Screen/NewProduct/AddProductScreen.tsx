import React, {useMemo, useState} from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import UploadImage from '../../Components/UploadImage/UploadImage';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import styles from './styles';
import {SCREEN_NAME} from '../../../Enum/Screens';
import {AddProductNavigationProps} from '../../../@Types/navigation.newProduct';
import {useDispatch, useSelector} from 'react-redux';

import ProductSlice, {
  productSelector,
} from '../../../Infrastructure/Store/Slice/ProductSlice';

const AddProductScreen: React.FC<AddProductNavigationProps> = ({
  navigation,
}) => {
  const productState = useSelector(productSelector);
  const [album, setAlbum] = useState(
    Array.from({length: 6}, (_, index) => tmpProduct?.album[index] || ''),
  );

  const tmpProduct = useMemo(
    () => productState.tmpProduct,
    [productState.tmpProduct],
  );

  const [title, setTitle] = useState<string>(tmpProduct.title);
  const [subtitle, setSubtitle] = useState<string>(tmpProduct?.subtitle ?? '');
  const [quantity, setQuantity] = useState<number>(tmpProduct.stock);

  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(
      ProductSlice.actions.setTmpProduct({
        data: {
          ...tmpProduct,
          title,
          subtitle,
          stock: Number(quantity),
        },
      }),
    );
    navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UploadImage title="Product Cover" />
        <View style={styles.inputContent}>
          <Input
            title="Select Product Categories"
            placeholder="Select Categories"
            type={INPUT_TYPE.PICKER}
            value={''}
          />
        </View>
        <View style={styles.inputContent}>
          <Input
            title="Product Name"
            type={INPUT_TYPE.TEXT}
            placeholder="Product Name"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Input
            title="Product Brand"
            type={INPUT_TYPE.TEXT}
            placeholder="Product Brand"
            value={subtitle}
            onChangeText={text => setSubtitle(text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Input
            title="Product Quantity"
            type={INPUT_TYPE.NUMBER}
            placeholder="Product Quantity"
            value={`${quantity}`}
            onChangeText={text => {
              if (Number(text)) {
                setQuantity(Number(text));
              } else {
                setQuantity(0);
              }
            }}
          />
        </View>
        <View style={styles.inputContent}>
          <UploadAlbum
            onChangeAlbum={data => {
              setAlbum(data);
            }}
            album={album}
          />
        </View>
      </ScrollView>
      <Button
        title="Next"
        onPress={() => {
          onPress();
        }}
      />
    </SafeAreaView>
  );
};

export default AddProductScreen;
