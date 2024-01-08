import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import {SCREEN_NAME} from '../../../Enum';
import styles from './styles';
import {SelectItemNavigationProps} from '../../../@Types/navigation.newProduct';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';

const SelectNewItem: React.FC<SelectItemNavigationProps> = ({navigation}) => {
  return (
    <SceneView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.productButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN)}>
          <Text style={styles.text}>
            {LocalizationService.titleScreen.ADD_PRODUCT_SCREEN}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.categoryButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.NEW_CATEGORY_SCREEN)}>
          <Text style={styles.text}>
            {LocalizationService.titleScreen.NEW_CATEGORY_SCREEN}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bannerButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.NEW_BANNER_SCREEN)}>
          <Text style={styles.text}>
            {LocalizationService.titleScreen.NEW_BANNER_SCREEN}
          </Text>
        </TouchableOpacity>
      </View>
    </SceneView>
  );
};

export default SelectNewItem;
