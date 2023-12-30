import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import {ProductDetailsScreenNavigationProps} from '../../../@Types/navigation.inventory';
import ImageView from '../../Components/ImageView/ImageView';
import Input from '../../Components/Input/Input';
import {IMAGE_TYPE, INPUT_TYPE} from '../../../Enum';
import styles from './styles';
import {CloseCircle, Edit} from 'iconsax-react-native';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import UploadImage from '../../Components/UploadImage/UploadImage';

const ProductDetailsScreen: React.FC<ProductDetailsScreenNavigationProps> = ({
  route,
}) => {
  const {item} = route.params;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(item.title);
  const [subtitle, setSubtitle] = useState<string>(item.subtitle || '');
  const [price, setPrice] = useState<number>(item.price);
  const [stock, setStock] = useState<number>(item.stock);

  const resetProduct = () => {
    setTitle(item.title);
    setSubtitle(item.subtitle || '');
    setPrice(item.price);
    setStock(item.stock);
  };
  const onPressEdit = () => {
    setIsEditing(true);
  };
  const onCancel = () => {
    resetProduct();
    setIsEditing(false);
  };

  const updateProduct = () => {};

  const onChangeNumber = (text: string, type: string) => {
    const num = text.split(' ')[1];

    if (/^\d+(\.\d{0,2})?$/.test(num)) {
      type === 'price' && setPrice(Number(num));
      type === 'stock' && setStock(Number(num));
    } else {
      type === 'price' && setPrice(0);
      type === 'stock' && setStock(0);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Product Details</Text>
          <View style={styles.rightIcon}>
            {!isEditing ? (
              <TouchableOpacity onPress={onPressEdit} style={styles.icon}>
                <Edit />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onCancel} style={styles.icon}>
                <CloseCircle />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.input}>
          {!isEditing ? (
            <ImageView
              imageProps={{
                style: styles.image,
                resizeMode: 'contain',
              }}
              imageType={IMAGE_TYPE.PRODUCT}
            />
          ) : (
            <UploadImage />
          )}
        </View>
        <View style={styles.input}>
          <Input
            title="Name"
            placeholder="Name"
            type={INPUT_TYPE.TEXT}
            textOptions={{textOptions: {editable: isEditing}}}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.input}>
          <Input
            title="Description"
            placeholder="Description"
            type={INPUT_TYPE.TEXT}
            value={subtitle}
            onChangeText={setSubtitle}
            textOptions={{textOptions: {editable: isEditing}}}
          />
        </View>
        <View style={styles.input}>
          <Input
            title="Price"
            placeholder="Price"
            type={INPUT_TYPE.TEXT}
            textOptions={{textOptions: {editable: isEditing}}}
            value={price.toString()}
            onChangeText={text => onChangeNumber(text, 'price')}
          />
        </View>
        <View style={styles.input}>
          <Input
            title="Stock"
            placeholder="Stock"
            value={stock.toString()}
            onChangeText={text => onChangeNumber(text, 'stock')}
            type={INPUT_TYPE.TEXT}
            textOptions={{textOptions: {editable: isEditing}}}
          />
        </View>
        <View style={styles.input}>
          <UploadAlbum title="Images" />
        </View>
      </ScrollView>
      {isEditing && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={updateProduct} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
