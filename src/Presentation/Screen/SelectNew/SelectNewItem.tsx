import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import {SCREEN_NAME, SCREEN_NAME_TITLE} from '../../../Enum';
import styles from './styles';
import {SelectItemNavigationProps} from '../../../@Types/navigation.newProduct';

const SelectNewItem: React.FC<SelectItemNavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN)}>
        <Text>{SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN_NAME.NEW_CATEGORY_SCREEN)}>
        <Text>{SCREEN_NAME_TITLE.NEW_CATEGORY_SCREEN}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN_NAME.NEW_BANNER_SCREEN)}>
        <Text>{SCREEN_NAME_TITLE.NEW_BANNER_SCREEN}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectNewItem;
