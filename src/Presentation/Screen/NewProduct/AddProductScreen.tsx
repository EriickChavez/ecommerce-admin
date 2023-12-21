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
import {Category} from '../../../Domain/Entity';
import {PickerItem} from '../../../@Types/picker';
import {getCategoriesByIds} from '../../../Utils/categoryUtils';
import {categorySelector} from '../../../Infrastructure/Store/Slice/CategorySlice';

const AddProductScreen: React.FC<AddProductNavigationProps> = ({
  navigation,
}) => {
  const productState = useSelector(productSelector);
  const categoryState = useSelector(categorySelector);

  const tmpProduct = useMemo(
    () => productState.tmpProduct,
    [productState.tmpProduct],
  );
  const [album, setAlbum] = useState(
    Array.from({length: 6}, (_, index) => tmpProduct?.album[index] || ''),
  );
  const [cover, setCover] = useState<string>(tmpProduct.cover || '');
  const [title, setTitle] = useState<string>(tmpProduct.title);
  const [subtitle, setSubtitle] = useState<string>(tmpProduct?.subtitle ?? '');
  const [quantity, setQuantity] = useState<number>(tmpProduct.stock);
  const Categories: Category[] = useMemo(() => {
    console.log({categoryState: categoryState});
    return [];
  }, [categoryState]);

  const [productCategories, setProductCategories] = useState<Category[]>(
    getCategoriesByIds(tmpProduct?.categoryId, Categories),
  );

  const dispatch = useDispatch();
  const onPress = () => {
    const data = {
      ...tmpProduct,
      title,
      subtitle,
      stock: Number(quantity),
      categoryId: productCategories.map(cty => cty.id),
      album: album.filter(item => item !== ''),
      cover,
    };

    dispatch(
      ProductSlice.actions.setTmpProduct({
        data,
      }),
    );
    navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2);
  };

  const transformPickerItemToCategory = (
    pickerItems: PickerItem[],
  ): Category[] => {
    const newCategories: Category[] = [];
    pickerItems.forEach(item => {
      const categoryIndex = Categories.findIndex(cty => cty.id === item.id);
      if (categoryIndex !== -1) {
        newCategories.push(Categories[categoryIndex]);
      }
    });
    return newCategories;
  };
  const transformCategoryToPickerItem = (): PickerItem[] => {
    return Categories.map(cty => {
      return {
        id: cty.id,
        label: cty.name,
        value: cty.name,
      };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UploadImage
          title="Product Cover"
          src={cover}
          onChangeImage={data => {
            setCover(data);
          }}
        />
        <View style={styles.inputContent}>
          <Input
            title="Select Product Categories"
            placeholder="Select Categories"
            type={INPUT_TYPE.PICKER}
            options={{
              pickerOptions: {
                data: transformCategoryToPickerItem(),
                onPickerSelectOption: data => {
                  setProductCategories(transformPickerItemToCategory(data));
                },
              },
            }}
            value={productCategories.join(', ')}
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
