import React from 'react';
import {View} from 'react-native';
import {ProductStockScreenNavigationProps} from '../../../@Types/navigation.settings';
import styles from './styles';
import TextInput from '../../Components/TextInput/TextInput';
import {SearchNormal} from 'iconsax-react-native';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
import ProductList from '../../Components/ProductList/ProductList';

const ProductStock: React.FC<ProductStockScreenNavigationProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            TextInputProps={{placeholder: 'Search', editable: true}}
            leftIcon={<SearchNormal color={theme.colors.text} />}
          />
        </View>
      </View>
      <ProductList />
    </View>
  );
};

export default ProductStock;
