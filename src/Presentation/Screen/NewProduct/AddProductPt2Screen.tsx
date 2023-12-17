import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {AddProductPt2NavigationProps} from '../../../@Types/navigation.newProduct';
import styles from './styles';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import {SCREEN_NAME} from '../../../Enum/Screens';
import ProductSlice, {
  productSelector,
} from '../../../Infrastructure/Store/Slice/ProductSlice';
import {useDispatch, useSelector} from 'react-redux';

const AddProductPt2Screen: React.FC<AddProductPt2NavigationProps> = ({
  navigation,
}) => {
  const productState = useSelector(productSelector);
  const [price, setPrice] = useState<number>(
    productState.tmpProduct.price || 0,
  );
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      ProductSlice.actions.setTmpProduct({
        data: {
          ...productState.tmpProduct,
          price,
        },
      }),
    );
    navigation.navigate(SCREEN_NAME.CONFIRM_DETAILS_SCREEN);
  };
  const onChangePrice = (text: string) => {
    const num = text.split(' ')[1];

    if (/^\d+(\.\d{0,2})?$/.test(num)) {
      setPrice(Number(num));
    } else {
      setPrice(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          title="Price"
          type={INPUT_TYPE.DROPDOWN}
          placeholder="Input Product Price"
          value={`$ ${price}`}
          onChangeText={onChangePrice}
        />
      </View>
      <Button title="Next" onPress={onPress} />
    </View>
  );
};

export default AddProductPt2Screen;
