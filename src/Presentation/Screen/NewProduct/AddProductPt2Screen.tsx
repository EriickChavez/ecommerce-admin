import React from 'react';
import {View} from 'react-native';
import {AddProductPt2NavigationProps} from '../../../@Types/navigation';
import styles from './styles';
import Text from '../../Components/Text/Text';

const AddProductPt2Screen: React.FC<AddProductPt2NavigationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Hola mudno</Text>
    </View>
  );
};

export default AddProductPt2Screen;
