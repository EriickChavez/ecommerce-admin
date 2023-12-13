import React from 'react';
import {Button, View} from 'react-native';
import {AddProductPt2NavigationProps} from '../../../@Types/navigation';
import styles from './styles';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import {SCREEN_NAME} from '../../../Enum/Screens';

const AddProductPt2Screen: React.FC<AddProductPt2NavigationProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          title="Price"
          type={INPUT_TYPE.DROPDOWN}
          placeholder="Input Product Price"
          value={''}
        />
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate(SCREEN_NAME.CONFIRM_DETAILS_SCREEN);
        }}
      />
    </View>
  );
};

export default AddProductPt2Screen;
