import React, {useMemo, useState} from 'react';
import {Alert, Button, SafeAreaView, ScrollView, View} from 'react-native';
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
import {Category, Characteristics} from '../../../Domain/Entity';
import {PickerItem} from '../../../@Types/picker';
import {getCategoriesByIds} from '../../../Utils/categoryUtils';
import {categorySelector} from '../../../Infrastructure/Store/Slice/CategorySlice';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import CharacteristicInput from '../../Components/CharacteristicInput/CharacteristicInput';

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
  const [description, setDescription] = useState<string>(tmpProduct.title);
  const [subtitle, setSubtitle] = useState<string>(tmpProduct?.subtitle ?? '');
  const [quantity, setQuantity] = useState<number>(tmpProduct.stock);
  const [characteristics, setCharacteristics] = useState<Characteristics[]>(
    tmpProduct.characteristics,
  );

  const [price, setPrice] = useState<number>(
    productState.tmpProduct.price || 0,
  );
  const Categories: Category[] = useMemo(
    () => categoryState.data,
    [categoryState],
  );

  const [productCategories, setProductCategories] = useState<Category[]>(
    getCategoriesByIds(tmpProduct?.categoryId, Categories),
  );

  const dispatch = useDispatch();

  const onAddCharacteristic = (data: Characteristics) => {
    if (characteristics.includes(data)) {
      Alert.alert('Error', 'Characteristic already exists');
    } else {
      setCharacteristics([...characteristics, data]);
    }
  };
  const onRemoveCharacteristic = (data: Characteristics) => {
    setCharacteristics(characteristics.filter(item => item !== data));
  };
  const goToHelpIconScreen = () => {
    navigation.navigate(SCREEN_NAME.ICON_HELP_SCREEN);
  };
  const onChangePrice = (text: string) => {
    const num = text.split(' ')[1];

    if (/^\d+(\.\d{0,2})?$/.test(num)) {
      setPrice(Number(num));
    } else {
      setPrice(0);
    }
  };
  const onPress = () => {
    const data = {
      ...tmpProduct,
      title,
      subtitle,
      stock: Number(quantity),
      categoryId: productCategories.map(cty => cty.id),
      album: album.filter(item => item !== ''),
      price,
      cover,
      characteristics: characteristics,
    };

    dispatch(
      ProductSlice.actions.setTmpProduct({
        data,
      }),
    );
    navigation.navigate(SCREEN_NAME.CONFIRM_DETAILS_SCREEN);
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
          containerStyle={styles.uploadImage}
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
            pickerOptions={{
              pickerOptions: {
                data: transformCategoryToPickerItem(),
                onPickerSelectOption: data => {
                  setProductCategories(transformPickerItemToCategory(data));
                },
                pickerArraySelected: [],
                setPickerArraySelected: () => {},
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
          <ExpandableTextInput
            text="Product Description"
            placeholder="Product Description"
            containerStyle={styles.expandibleTextInput}
            value={description}
            onChangeText={text => setDescription(text)}
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
        <View style={styles.content}>
          <Input
            title="Price"
            type={INPUT_TYPE.DROPDOWN}
            placeholder="Input Product Price"
            value={`$ ${price}`}
            onChangeText={onChangePrice}
          />
        </View>
        <View style={styles.inputContent}>
          <Input
            title="Product Stock"
            type={INPUT_TYPE.NUMBER}
            placeholder="Product Stock"
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
          <CharacteristicInput
            goToHelpIconScreen={goToHelpIconScreen}
            options={{
              characteristics,
              addCharacteristics: onAddCharacteristic,
              onRemoveItem: onRemoveCharacteristic,
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
