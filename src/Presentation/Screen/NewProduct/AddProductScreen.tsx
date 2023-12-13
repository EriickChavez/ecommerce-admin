import React from 'react';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import {AddProductNavigationProps} from '../../../@Types/navigation';
import UploadImage from '../../Components/UploadImage/UploadImage';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import styles from './styles';
import {SCREEN_NAME} from '../../../Enum/Screens';
const AddProductScreen: React.FC<AddProductNavigationProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UploadImage title="Product Cover" />
        <Input
          title="Select Product Categories"
          placeholder="Select Categories"
          type={INPUT_TYPE.PICKER}
          value={''}
        />
        <Input
          title="Product Name"
          type={INPUT_TYPE.TEXT}
          placeholder="Product Name"
          value={''}
        />
        <Input
          title="Product Brand"
          type={INPUT_TYPE.TEXT}
          placeholder="Product Brand"
          value={''}
        />
        <Input
          title="Product Quantity"
          type={INPUT_TYPE.NUMBER}
          placeholder="Product Quantity"
          value={''}
        />
        <UploadAlbum />
      </ScrollView>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2);
        }}
      />
    </SafeAreaView>
  );
};

export default AddProductScreen;
