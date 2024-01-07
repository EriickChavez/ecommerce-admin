import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import {SCREEN_NAME, SCREEN_NAME_TITLE} from '../../../Enum';
import styles from './styles';
import {SelectItemNavigationProps} from '../../../@Types/navigation.newProduct';
import SceneView from '../../Components/SceneView/SceneView';

const SelectNewItem: React.FC<SelectItemNavigationProps> = ({navigation}) => {
  return (
    <SceneView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.productButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.ADD_PRODUCT_SCREEN)}>
          <Text style={styles.text}>
            {SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.categoryButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.NEW_CATEGORY_SCREEN)}>
          <Text style={styles.text}>
            {SCREEN_NAME_TITLE.NEW_CATEGORY_SCREEN}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bannerButton]}
          onPress={() => navigation.navigate(SCREEN_NAME.NEW_BANNER_SCREEN)}>
          <Text style={styles.text}>{SCREEN_NAME_TITLE.NEW_BANNER_SCREEN}</Text>
        </TouchableOpacity>
      </View>
    </SceneView>
  );
};

export default SelectNewItem;
