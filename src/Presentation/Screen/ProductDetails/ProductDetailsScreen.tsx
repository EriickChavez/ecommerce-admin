import React, {useMemo, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import {ProductDetailsScreenNavigationProps} from '../../../@Types/navigation.inventory';
import ImageView from '../../Components/ImageView/ImageView';
import Input from '../../Components/Input/Input';
import {IMAGE_TYPE, INPUT_TYPE} from '../../../Enum';
import styles from './styles';
import {CloseCircle, Edit, Trash} from 'iconsax-react-native';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import UploadImage from '../../Components/UploadImage/UploadImage';
import {Config} from '../../../Config/ENV';
import SceneView from '../../Components/SceneView/SceneView';

const ProductDetailsScreen: React.FC<ProductDetailsScreenNavigationProps> = ({
  route,
  navigation,
}) => {
  const {item} = route.params;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(item.title);
  const [subtitle, setSubtitle] = useState<string>(item.subtitle || '');
  const [price, setPrice] = useState<number>(item.price);
  const [stock, setStock] = useState<number>(item.stock);
  const [album, setAlbum] = useState<string[]>(item?.album || []);

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

  const updateProduct = () => {
    navigation.goBack();
  };

  const onPressRemove = () => {};
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
  const albumUploaded = useMemo(() => {
    const newArray: string[] = [...album];
    if (isEditing) {
      new Array(Math.max(0, 6)).fill('').forEach(element => {
        newArray.push(element);
      });
    }
    return newArray.length > 6 ? newArray.slice(0, 6) : newArray;
  }, [album, isEditing]);
  const stickyArray = useMemo(() => {
    return isEditing ? [7] : [];
  }, [isEditing]);
  return (
    <SceneView>
      <View style={styles.container}>
        <ScrollView
          stickyHeaderIndices={stickyArray}
          style={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.header}>
              <View>
                <TouchableOpacity onPress={onPressRemove} style={styles.icon}>
                  <Trash />
                </TouchableOpacity>
              </View>
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
          </View>
          <View style={styles.input}>
            {!isEditing ? (
              <ImageView
                imageProps={{
                  style: styles.image,
                  resizeMode: 'contain',
                  source: {uri: Config.BASE_URI_IMAGE + item.cover},
                }}
                imageType={IMAGE_TYPE.PRODUCT}
              />
            ) : (
              <View style={styles.uploadImage}>
                <UploadImage
                  src={Config.BASE_URI_IMAGE + item.cover}
                  borderWidth={2}
                  resizeMode={'contain'}
                />
              </View>
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
            <UploadAlbum
              disabled={!isEditing}
              title="Images"
              album={albumUploaded}
              onChangeAlbum={setAlbum}
            />
          </View>
          {isEditing && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={updateProduct} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </SceneView>
  );
};

export default ProductDetailsScreen;
